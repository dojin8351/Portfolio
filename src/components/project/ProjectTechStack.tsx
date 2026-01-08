'use client'

import { ImgType } from '@/types/common'

interface ProjectTechStackProps {
  techLogos: ImgType[]
}

export default function ProjectTechStack({
  techLogos,
}: ProjectTechStackProps) {
  return (
    <div className="mt-12 flex flex-wrap gap-3">
      {techLogos.map((tech, idx) => (
        <span
          key={idx}
          className="px-4 py-2 border border-gray-400 dark:border-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-400 hover:border-gray-700 dark:hover:border-gray-600 transition-colors"
        >
          {tech.alt}
        </span>
      ))}
    </div>
  )
}
