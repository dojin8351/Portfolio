"use client"

import { useRef, useEffect, useCallback, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Project } from "@/types/project"
import ProjectCard from "./ProjectCard"
import { useIsMobile } from "@/hooks/useIsMobile"

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
  const isMobile = useIsMobile()
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

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

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDraggingRef.current || !scrollContainerRef.current) return

    e.preventDefault()
    const container = scrollContainerRef.current
    const touch = e.touches[0]
    const x = touch.pageX - container.offsetLeft
    const walk = (x - startXRef.current) * 1.5

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk
      }
    })
  }, [])

  const checkScrollPosition = useCallback(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const { scrollLeft, scrollWidth, clientWidth } = container
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10) // 10px tolerance
  }, [])

  const scrollTo = useCallback((direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = container.clientWidth * 0.8 // 80% of viewport width
    const targetScroll =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    })
  }, [])

  // 스크롤 위치 체크
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    checkScrollPosition()
    container.addEventListener("scroll", checkScrollPosition)

    return () => {
      container.removeEventListener("scroll", checkScrollPosition)
    }
  }, [checkScrollPosition, projects])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // 데스크톱 마우스 이벤트
    const handleMouseEnter = () => {
      if (!isMobile) {
        setIsDraggableArea(true)
      }
    }

    const handleMouseLeave = () => {
      if (!isMobile) {
        setIsDraggableArea(false)
        isDraggingRef.current = false
        container.style.cursor = "grab"
        container.style.userSelect = "auto"
        container.style.scrollBehavior = "smooth"
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
      }
    }

    const handleMouseDown = (e: MouseEvent) => {
      if (isMobile) return
      isDraggingRef.current = true
      startXRef.current = e.pageX - container.offsetLeft
      scrollLeftRef.current = container.scrollLeft
      container.style.cursor = "grabbing"
      container.style.userSelect = "none"
      container.style.scrollBehavior = "auto"
    }

    const handleMouseUp = () => {
      if (isMobile) return
      isDraggingRef.current = false
      container.style.cursor = "grab"
      container.style.userSelect = "auto"
      container.style.scrollBehavior = "smooth"
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }

    // 터치 이벤트
    const handleTouchStart = (e: TouchEvent) => {
      if (!isMobile) return
      isDraggingRef.current = true
      const touch = e.touches[0]
      startXRef.current = touch.pageX - container.offsetLeft
      scrollLeftRef.current = container.scrollLeft
      container.style.userSelect = "none"
      container.style.scrollBehavior = "auto"
    }

    const handleTouchEnd = () => {
      if (!isMobile) return
      isDraggingRef.current = false
      container.style.userSelect = "auto"
      container.style.scrollBehavior = "smooth"
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }

    if (!isMobile) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
      container.addEventListener("mousedown", handleMouseDown)
      container.addEventListener("mouseup", handleMouseUp)
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    } else {
      container.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      })
      container.addEventListener("touchend", handleTouchEnd)
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      })
      document.addEventListener("touchend", handleTouchEnd)
    }

    return () => {
      if (!isMobile) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
        container.removeEventListener("mousedown", handleMouseDown)
        container.removeEventListener("mouseup", handleMouseUp)
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      } else {
        container.removeEventListener("touchstart", handleTouchStart)
        container.removeEventListener("touchend", handleTouchEnd)
        document.removeEventListener("touchmove", handleTouchMove)
        document.removeEventListener("touchend", handleTouchEnd)
      }
      setIsDraggableArea(false)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [handleMouseMove, handleTouchMove, setIsDraggableArea, isMobile])

  return (
    <div
      className={`view-transition absolute inset-0 flex items-center ${isVisible ? "visible translate-x-0 opacity-100" : "invisible translate-x-4 opacity-0"} `}
    >
      <div
        ref={scrollContainerRef}
        className={`hide-scrollbar flex h-[70vh] w-full snap-x snap-mandatory items-center overflow-x-auto px-4 md:h-[70vh] md:px-8 lg:px-24 ${!isMobile ? "cursor-grab active:cursor-grabbing" : ""}`}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex gap-6 pr-8 md:gap-12 md:pr-24 lg:gap-32">
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
      <div className="absolute bottom-6 left-4 animate-pulse text-[10px] tracking-widest text-gray-500 uppercase md:bottom-12 md:left-12 md:text-xs lg:left-24 dark:text-gray-500">
        {isMobile ? "Swipe" : "Scroll / Drag"}
      </div>

      {/* 좌우 네비게이션 버튼 (데스크톱만) */}
      {!isMobile && (
        <>
          {/* 왼쪽 버튼 */}
          {canScrollLeft && (
            <button
              onClick={() => scrollTo("left")}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              aria-label="이전 프로젝트로 이동"
              className="absolute top-1/2 left-4 z-50 -translate-y-1/2 cursor-none rounded-full border border-gray-400 bg-white/80 p-3 backdrop-blur-md transition-all duration-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none md:left-8 lg:left-12 dark:border-gray-700 dark:bg-black/80 dark:hover:border-white dark:hover:bg-white dark:hover:text-black dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* 오른쪽 버튼 */}
          {canScrollRight && (
            <button
              onClick={() => scrollTo("right")}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              aria-label="다음 프로젝트로 이동"
              className="absolute top-1/2 right-4 z-50 -translate-y-1/2 cursor-none rounded-full border border-gray-400 bg-white/80 p-3 backdrop-blur-md transition-all duration-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none md:right-8 lg:right-12 dark:border-gray-700 dark:bg-black/80 dark:hover:border-white dark:hover:bg-white dark:hover:text-black dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </>
      )}
    </div>
  )
}
