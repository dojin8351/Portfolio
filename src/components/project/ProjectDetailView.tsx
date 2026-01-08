'use client'

import { X, Github, ExternalLink, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { Project } from '@/types/project'
import ProjectDescriptionList from './ProjectDescriptionList'
import ProjectGallery from './ProjectGallery'
import ProjectTechStack from './ProjectTechStack'

interface ProjectDetailViewProps {
  project: Project | null
  projects: Project[]
  onBackToList: () => void
  onNextProject: (project: Project) => void
  setIsHovering: (hovering: boolean) => void
  isVisible: boolean
}

export default function ProjectDetailView({
  project,
  projects,
  onBackToList,
  onNextProject,
  setIsHovering,
  isVisible,
}: ProjectDetailViewProps) {
  const detailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isVisible && detailRef.current) {
      detailRef.current.scrollTop = 0
    }
  }, [isVisible, project])

  if (!project) return null

  const titleMatch = project.title.match(/^(.+?)\s*\((.+?)\)$/)
  const displayTitle = titleMatch ? titleMatch[1] : project.title
  const subtitle = titleMatch ? titleMatch[2] : ''

  const nextId = project.id === projects.length ? 1 : project.id + 1
  const nextProject = projects.find((p) => p.id === nextId)

  return (
    <div
      ref={detailRef}
      className={`
        absolute inset-0 bg-[#FAFAF9] dark:bg-[#111] z-30 overflow-y-auto hide-scrollbar view-transition
        ${isVisible ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-4'}
      `}
    >
      <div className="min-h-screen relative pb-32">
              <button
                onClick={onBackToList}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onBackToList()
                  }
                }}
                aria-label="프로젝트 목록으로 돌아가기"
                className="fixed top-8 right-8 md:top-12 md:right-12 z-50 p-3 rounded-full border border-gray-400 dark:border-gray-700 bg-white/50 dark:bg-black/50 backdrop-blur-md hover:border-gray-900 dark:hover:border-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 cursor-none focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                <X className="w-6 h-6" />
              </button>

        <div className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden">
          {project.projectImage[0] && (
            <Image
              src={project.projectImage[0].src}
              alt={project.projectImage[0].alt || project.title}
              fill
              className="object-cover opacity-60"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF9] dark:from-[#111] via-[#FAFAF9]/50 dark:via-[#111]/50 to-transparent" />

          <div className="absolute bottom-0 left-0 p-8 md:p-24 w-full">
            <div className="overflow-hidden mb-6">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-light translate-y-0 opacity-100 transition-transform duration-700 delay-300 text-gray-900 dark:text-[#f0f0f0]">
                {displayTitle}
              </h1>
              {subtitle && (
                <p className="text-xl md:text-3xl text-gray-600 dark:text-gray-400 font-light mt-2 animate-fade-in-up delay-500">
                  {subtitle}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-8 md:gap-16 border-t border-gray-300 dark:border-gray-800 pt-8 mt-8 animate-fade-in-up delay-700">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-1">
                  Role
                </p>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200">
                  {project.role}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-1">
                  Period
                </p>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200">
                  {project.period}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-1">
                  Team
                </p>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200">
                  {project.team}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-8 md:px-12 py-24">
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-light leading-relaxed text-gray-800 dark:text-gray-200">
              {project.description}
            </h2>
            <ProjectTechStack techLogos={project.techLogos} />
            <div className="mt-12 flex flex-col md:flex-row gap-6">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                aria-label={`${displayTitle} GitHub 저장소 보기 (새 창 열림)`}
                className="inline-flex items-center gap-3 text-xl border-b border-gray-400 dark:border-gray-700 pb-1 hover:border-gray-900 dark:hover:border-white transition-all cursor-none focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-sm"
              >
                <Github className="w-5 h-5" />
                <span className="text-gray-800 dark:text-[#f0f0f0]">View on GitHub</span>
                <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-500" />
              </a>
              {project.liveDemoLink && (
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  aria-label={`${displayTitle} 라이브 데모 보기 (새 창 열림)`}
                  className="inline-flex items-center gap-3 text-xl border-b border-gray-400 dark:border-gray-700 pb-1 hover:border-gray-900 dark:hover:border-white transition-all cursor-none focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-sm"
                >
                  <ExternalLink className="w-5 h-5 text-gray-800 dark:text-[#f0f0f0]" />
                  <span className="text-gray-800 dark:text-[#f0f0f0]">Live Demo</span>
                </a>
              )}
            </div>
          </div>

          <ProjectDescriptionList
            descriptions={project.projectDescription}
          />

          {project.projectImage.length > 1 && (
            <ProjectGallery images={project.projectImage.slice(1)} />
          )}

          {nextProject && (
            <div className="mt-40 pt-20 border-t border-gray-300 dark:border-gray-800 flex justify-between items-end">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-600 mb-4 uppercase tracking-widest">
                  Next Project
                </p>
                <button
                  onClick={() => onNextProject(nextProject)}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="text-4xl md:text-6xl font-serif italic hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-500 transition-colors duration-500 cursor-none flex items-center gap-4"
                >
                  Next Work{' '}
                  <ChevronRight className="w-10 h-10 md:w-16 md:h-16 opacity-50" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
