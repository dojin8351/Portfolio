'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
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

  const handleCardClick = (e: React.MouseEvent) => {
    // 라이브 데모 링크가 클릭된 경우는 카드 클릭 이벤트를 막음
    if ((e.target as HTMLElement).closest('a[data-live-demo]')) {
      return
    }
    onClick()
  }

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${displayTitle} 프로젝트 자세히 보기`}
      className="group relative flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[35vw] max-w-[600px] max-h-[800px] snap-center flex flex-col gap-6 cursor-none focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-sm"
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
        {/* 라이브 데모 링크 버튼 */}
        {project.liveDemoLink && (
          <a
            href={project.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            data-live-demo="true"
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            aria-label={`${displayTitle} 라이브 데모 보기 (새 창 열림)`}
            className="absolute top-4 right-4 z-20 p-3 rounded-full bg-black/70 dark:bg-white/20 backdrop-blur-md hover:bg-black/90 dark:hover:bg-white/30 transition-all duration-300 group/link cursor-none focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
          >
            <ExternalLink className="w-5 h-5 text-white group-hover/link:scale-110 transition-transform duration-300" />
          </a>
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
