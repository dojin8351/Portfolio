'use client'

import Image from 'next/image'
import { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
  index: number
  onClick: () => void
  setIsHovering: (hovering: boolean) => void
}

export default function ProjectCard({
  project,
  index,
  onClick,
  setIsHovering,
}: ProjectCardProps) {
  // 프로젝트 제목에서 괄호 부분을 subtitle로 분리
  const titleMatch = project.title.match(/^(.+?)\s*\((.+?)\)$/)
  const displayTitle = titleMatch ? titleMatch[1] : project.title
  const subtitle = titleMatch ? titleMatch[2] : ''

  // 카테고리 추출 (description에서 추출하거나 기본값)
  const category = 'Project'

  // 기간에서 시작일만 추출
  const startDate = project.period
    ? project.period.split('~')[0].trim()
    : ''

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group relative flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[35vw] max-w-[600px] max-h-[800px] snap-center flex flex-col gap-6 cursor-none"
    >
      <span className="text-6xl font-serif text-gray-300/40 dark:text-white/40 group-hover:text-gray-900/100 dark:group-hover:text-white/100 transition-all duration-500">
        0{index + 1}
      </span>
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200 dark:bg-gray-900">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        {project.projectImage[0] && (
          <Image
            src={project.projectImage[0].src}
            alt={project.projectImage[0].alt || project.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-[1.5s] aristide-ease"
          />
        )}
      </div>
      <div className="flex justify-between items-end border-b border-gray-300 dark:border-gray-800 pb-4 group-hover:border-gray-600 dark:group-hover:border-gray-500 transition-colors duration-500">
        <div>
          <h3 className="text-3xl font-light mb-1 text-gray-900 dark:text-[#f0f0f0]">
            {displayTitle}
            {subtitle && (
              <span className="block text-lg text-gray-600 dark:text-gray-400 font-normal">
                {subtitle}
              </span>
            )}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-500 uppercase tracking-widest mt-2">
            {category}
          </p>
        </div>
        {startDate && (
          <span className="text-sm text-gray-600 dark:text-gray-500">{startDate}</span>
        )}
      </div>
    </div>
  )
}
