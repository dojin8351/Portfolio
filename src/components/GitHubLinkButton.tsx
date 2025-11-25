'use client'

import {Github} from "lucide-react";

interface GitHubLinkButtonProps {
  githubLink : string
}


export default function GitHubLinkButton({githubLink} : GitHubLinkButtonProps) {
  const openGitHub = () => {
    window.open(githubLink, '_blank', 'noopener,noreferrer')
  }
  return (<button
    onClick={openGitHub}
    className={'animate-bounce text-md font-medium bg-gray-200 px-1.5 py-0.5 rounded-full text-gray-600 dark:text-white dark:bg-gray-700 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 flex flex-row items-center gap-1'}
    suppressHydrationWarning
  >
    <Github size={20}/>
  </button>)
}