import React from "react"
import GitHubLinkButton from "@/components/about-me/GitHubLinkButton"

interface ProjectMetaItem {
  label: string
  value: string
}

interface ProjectMetaGridProps {
  items: ProjectMetaItem[]
  githubLink: string
  className?: string
}

export default function ProjectMetaGrid({
  items,
  githubLink,
  className = "",
}: ProjectMetaGridProps) {
  return (
    <div className={`mt-2 mb-2 flex flex-col gap-4 overflow-x-hidden sm:flex-row sm:gap-6 md:gap-8 ${className}`}>
      {items.map((item) => (
        <div key={item.label} className="min-w-0">
          <p className="mb-1 text-xs text-gray-400 sm:text-sm dark:text-gray-500">{item.label}</p>
          <div className="text-xs text-gray-700 sm:text-sm dark:text-gray-300 break-words">
            {item.value}
          </div>
        </div>
      ))}
      <div className="min-w-0">
        <p className="mb-1 text-xs text-gray-400 sm:text-sm dark:text-gray-500">관련 링크</p>
        <GitHubLinkButton githubLink={githubLink} />
      </div>
    </div>
  )
}

