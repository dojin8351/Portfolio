'use client'

import { useRef, useEffect, useCallback } from 'react'
import { Project } from '@/types/project'
import ProjectCard from './ProjectCard'

interface ProjectListViewProps {
  projects: Project[]
  onProjectClick: (project: Project) => void
  setIsHovering: (hovering: boolean) => void
  setIsDraggableArea: (isDraggable: boolean) => void
  isVisible: boolean
}

export default function ProjectListView({
  projects,
  onProjectClick,
  setIsHovering,
  setIsDraggableArea,
  isVisible,
}: ProjectListViewProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const animationFrameRef = useRef<number | null>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current || !scrollContainerRef.current) return
    
    e.preventDefault()
    const container = scrollContainerRef.current
    const x = e.pageX - container.offsetLeft
    const walk = (x - startXRef.current) * 1.5 // 스크롤 속도 조절 (더 부드럽게)
    
    // requestAnimationFrame을 사용하여 부드러운 스크롤
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk
      }
    })
  }, [])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleMouseEnter = () => {
      setIsDraggableArea(true)
    }

    const handleMouseLeave = () => {
      setIsDraggableArea(false)
      isDraggingRef.current = false
      container.style.cursor = 'grab'
      container.style.userSelect = 'auto'
      container.style.scrollBehavior = 'smooth' // 드래그 종료 후 부드러운 스크롤
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }

    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true
      startXRef.current = e.pageX - container.offsetLeft
      scrollLeftRef.current = container.scrollLeft
      container.style.cursor = 'grabbing'
      container.style.userSelect = 'none'
      container.style.scrollBehavior = 'auto' // 드래그 중에는 즉시 스크롤
    }

    const handleMouseUp = () => {
      isDraggingRef.current = false
      container.style.cursor = 'grab'
      container.style.userSelect = 'auto'
      container.style.scrollBehavior = 'smooth' // 드래그 종료 후 부드러운 스크롤
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('mousedown', handleMouseDown)
    container.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('mousedown', handleMouseDown)
      container.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      setIsDraggableArea(false)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [handleMouseMove, setIsDraggableArea])

  return (
    <div
      className={`
        absolute inset-0 flex items-center view-transition
        ${isVisible ? 'visible opacity-100 translate-x-0' : 'invisible opacity-0 translate-x-4'}
      `}
    >
      <div
        ref={scrollContainerRef}
        className="w-full h-[70vh] flex items-center overflow-x-auto hide-scrollbar px-8 md:px-24 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
      >
        <div className="flex gap-12 md:gap-32 pr-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => onProjectClick(project)}
              setIsHovering={setIsHovering}
            />
          ))}
          <div className="w-24 flex-shrink-0"></div>
        </div>
      </div>
      <div className="absolute bottom-12 left-12 md:left-24 text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest animate-pulse">
        Scroll / Drag
      </div>
    </div>
  )
}
