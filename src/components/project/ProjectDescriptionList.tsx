'use client'

import { ProjectDescription } from '@/types/project'

interface ProjectDescriptionListProps {
  descriptions: ProjectDescription[]
}

export default function ProjectDescriptionList({
  descriptions,
}: ProjectDescriptionListProps) {
  return (
    <div className="space-y-24">
      {descriptions.map((desc) => (
        <div
          key={desc.id}
          className="group grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-gray-300 dark:border-gray-900 pt-8"
        >
          <div className="md:col-span-4">
            <span className="text-xs text-gray-500 dark:text-gray-600 font-mono mb-2 block">
              0{desc.id}
            </span>
            <h3 className="text-2xl font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
              {desc.title}
            </h3>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
              {desc.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
