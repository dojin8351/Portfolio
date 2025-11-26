'use client'

import GitHubIcon from "@/components/ui/GitHubIcon";

interface GitHubLinkButtonProps {
  githubLink : string
}


export default function GitHubLinkButton({githubLink} : GitHubLinkButtonProps) {
  return <a
    href={githubLink}
    target="_blank"
    rel="noopener noreferrer"
    className={'cursor-pointer gap-1 flex flex-row items-center bg-black dark:bg-white text-white dark:text-black text-xs rounded-full px-2 py-1 hover:opacity-80 transition-opacity'}
  >
    <GitHubIcon className="w-4 h-4 text-white dark:text-black" />
    <p>github</p>
  </a>
}