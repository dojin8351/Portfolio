"use client"

import ThemeToggleButton from "@/components/ui/ThemeToggleButton"
import { useScrollToSection } from "@/hooks/useScrollToSection"

export default function Header() {
  const { scrollToSection } = useScrollToSection()

  return (
    <div className="w-full border-b border-gray-200/50 bg-white/80 shadow-sm transition-all duration-300 dark:border-gray-700/50 dark:bg-gray-900/80">
      <div className="mx-auto flex h-14 w-full max-w-[1100px] flex-row items-center justify-between px-3 sm:h-16 sm:px-4 md:px-5">
        <p
          className="sm:text-h3 cursor-pointer text-lg font-semibold antialiased dark:text-white"
          onClick={() => scrollToSection(null)}
        >
          Portfolio
        </p>
        <div className="flex flex-row items-center justify-between gap-2 sm:gap-5">
          <div className="hidden flex-row gap-3 font-medium sm:flex sm:gap-5 dark:text-white">
            <p
              className="cursor-pointer text-sm transition-colors hover:text-blue-500 sm:text-base"
              onClick={() => scrollToSection(null)}
            >
              자기소개
            </p>
            <p
              className="cursor-pointer text-sm transition-colors hover:text-blue-500 sm:text-base"
              onClick={() => scrollToSection("competency")}
            >
              역량
            </p>
            <p
              className="cursor-pointer text-sm transition-colors hover:text-blue-500 sm:text-base"
              onClick={() => scrollToSection("skills")}
            >
              기술
            </p>
            <p
              className="cursor-pointer text-sm transition-colors hover:text-blue-500 sm:text-base"
              onClick={() => scrollToSection("projects")}
            >
              프로젝트
            </p>
          </div>
          <div>
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </div>
  )
}
