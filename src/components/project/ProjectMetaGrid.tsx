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
    <div className={`mt-2 mb-2 flex flex-row gap-8 ${className}`}>
      {items.map((item) => (
        <div key={item.label}>
          <p className="mb-1 text-gray-400 dark:text-gray-500">{item.label}</p>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            {item.value}
          </div>
        </div>
      ))}
      <div>
        <p className="mb-1 text-gray-400 dark:text-gray-500">관련 링크</p>
        <GitHubLinkButton githubLink={githubLink} />
      </div>
    </div>
  )
}

