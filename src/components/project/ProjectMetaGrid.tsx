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
    <div
      className={`flex flex-col gap-4 overflow-x-hidden sm:flex-row sm:gap-6 md:gap-8 ${className}`}
    >
      {items.map((item) => (
        <div key={item.label} className="min-w-0">
          <p className="mb-1 text-sm font-medium text-gray-400 dark:text-gray-400">
            {item.label}
          </p>
          <div className="text-sm break-words text-gray-700 dark:text-gray-200">
            {item.value || "-"}
          </div>
        </div>
      ))}
      <div className="w-fit min-w-0">
        <p className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
          관련 링크
        </p>
        <GitHubLinkButton githubLink={githubLink} />
      </div>
    </div>
  )
}
