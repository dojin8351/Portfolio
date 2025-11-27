"use client"

import GitHubIcon from "@/components/ui/GitHubIcon"

interface GitHubLinkButtonProps {
  githubLink: string
}

export default function GitHubLinkButton({
  githubLink,
}: GitHubLinkButtonProps) {
  return (
    <a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "flex cursor-pointer flex-row items-center gap-1 rounded-full bg-black px-2 py-1 text-xs text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-black"
      }
    >
      <GitHubIcon className="h-4 w-4 text-white dark:text-black" />
      <p>github</p>
    </a>
  )
}
