"use client"

import { X, Github, ExternalLink, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useRef, useEffect } from "react"
import { Project } from "@/types/project"
import ProjectDescriptionList from "./ProjectDescriptionList"
import ProjectGallery from "./ProjectGallery"
import ProjectTechStack from "./ProjectTechStack"

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
  const subtitle = titleMatch ? titleMatch[2] : ""

  const nextId = project.id === projects.length ? 1 : project.id + 1
  const nextProject = projects.find((p) => p.id === nextId)

  return (
    <div
      ref={detailRef}
      className={`hide-scrollbar view-transition absolute inset-0 z-30 overflow-y-auto bg-[#FAFAF9] dark:bg-[#111] ${isVisible ? "visible translate-y-0 opacity-100" : "invisible translate-y-4 opacity-0"} `}
    >
      <div className="relative min-h-screen pb-32">
        <button
          onClick={onBackToList}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              onBackToList()
            }
          }}
          aria-label="프로젝트 목록으로 돌아가기"
          className="fixed top-4 right-4 z-50 flex min-h-[44px] min-w-[44px] touch-manipulation items-center justify-center rounded-full border border-gray-400 bg-white/50 p-2.5 backdrop-blur-md transition-all duration-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none active:border-gray-900 active:bg-gray-900 active:text-white md:top-8 md:right-8 md:cursor-none md:p-3 lg:top-12 lg:right-12 dark:border-gray-700 dark:bg-black/50 dark:hover:border-white dark:hover:bg-white dark:hover:text-black dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900 dark:active:border-white dark:active:bg-white dark:active:text-black"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative h-[60vh] w-full overflow-hidden md:h-[80vh]">
          {(project.representativeImg || project.projectImage[0]) && (
            <Image
              src={
                project.representativeImg?.src || project.projectImage[0].src
              }
              alt={
                project.representativeImg?.alt ||
                project.projectImage[0].alt ||
                project.title
              }
              fill
              className="object-cover opacity-60"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF9] via-[#FAFAF9]/50 to-transparent dark:from-[#111] dark:via-[#111]/50" />

          <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 lg:p-24">
            <div className="mb-4 overflow-hidden md:mb-6">
              <h1 className="translate-y-0 text-3xl font-light text-gray-900 opacity-100 transition-transform delay-300 duration-700 sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl dark:text-[#f0f0f0]">
                {displayTitle}
              </h1>
              {subtitle && (
                <p className="animate-fade-in-up mt-2 text-base font-light text-gray-600 delay-500 md:text-xl lg:text-3xl dark:text-gray-400">
                  {subtitle}
                </p>
              )}
            </div>

            <div className="animate-fade-in-up mt-4 flex flex-wrap gap-4 border-t border-gray-300 pt-4 delay-700 md:mt-8 md:gap-8 md:pt-8 lg:gap-16 dark:border-gray-800">
              <div>
                <p className="mb-1 text-xs tracking-widest text-gray-500 uppercase dark:text-gray-500">
                  Role
                </p>
                <p className="text-lg text-gray-700 md:text-xl dark:text-gray-200">
                  {project.role}
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs tracking-widest text-gray-500 uppercase dark:text-gray-500">
                  Period
                </p>
                <p className="text-lg text-gray-700 md:text-xl dark:text-gray-200">
                  {project.period}
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs tracking-widest text-gray-500 uppercase dark:text-gray-500">
                  Team
                </p>
                <p className="text-lg text-gray-700 md:text-xl dark:text-gray-200">
                  {project.team}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-24">
          <div className="mb-12 md:mb-16 lg:mb-24">
            <h2 className="text-base leading-relaxed font-light text-gray-800 md:text-xl lg:text-2xl xl:text-3xl dark:text-gray-200">
              {project.description}
            </h2>
            <ProjectTechStack techLogos={project.techLogos} />
            <div className="mt-12 flex flex-col gap-6 md:flex-row">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                aria-label={`${displayTitle} GitHub 저장소 보기 (새 창 열림)`}
                className="inline-flex min-h-[44px] touch-manipulation items-center gap-2 rounded-sm border-b border-gray-400 pb-1 text-base transition-all hover:border-gray-900 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none active:border-gray-900 md:cursor-none md:gap-3 md:text-lg lg:text-xl dark:border-gray-700 dark:hover:border-white dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900 dark:active:border-white"
              >
                <Github className="h-5 w-5" />
                <span className="text-gray-800 dark:text-[#f0f0f0]">
                  View on GitHub
                </span>
                <ExternalLink className="h-4 w-4 text-gray-600 dark:text-gray-500" />
              </a>
              {project.liveDemoLink && (
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  aria-label={`${displayTitle} 라이브 데모 보기 (새 창 열림)`}
                  className="inline-flex min-h-[44px] touch-manipulation items-center gap-2 rounded-sm border-b border-gray-400 pb-1 text-base transition-all hover:border-gray-900 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none active:border-gray-900 md:cursor-none md:gap-3 md:text-lg lg:text-xl dark:border-gray-700 dark:hover:border-white dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900 dark:active:border-white"
                >
                  <ExternalLink className="h-5 w-5 text-gray-800 dark:text-[#f0f0f0]" />
                  <span className="text-gray-800 dark:text-[#f0f0f0]">
                    Live Demo
                  </span>
                </a>
              )}
            </div>
          </div>

          <ProjectDescriptionList descriptions={project.projectDescription} />

          {project.projectImage.length > 1 && (
            <ProjectGallery images={project.projectImage.slice(1)} />
          )}

          {nextProject && (
            <div className="mt-40 flex items-end justify-between border-t border-gray-300 pt-20 dark:border-gray-800">
              <div>
                <p className="mb-4 text-sm tracking-widest text-gray-600 uppercase dark:text-gray-600">
                  Next Project
                </p>
                <button
                  onClick={() => onNextProject(nextProject)}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="flex cursor-none items-center gap-4 font-serif text-4xl text-gray-600 italic transition-colors duration-500 hover:text-gray-900 md:text-6xl dark:text-gray-500 dark:hover:text-white"
                >
                  Next Work{" "}
                  <ChevronRight className="h-10 w-10 opacity-50 md:h-16 md:w-16" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
