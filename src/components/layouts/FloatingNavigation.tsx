"use client"

import ThemeToggleButton from "../ui/ThemeToggleButton"
import { useScrollToSection } from "@/hooks/useScrollToSection"
import { useActiveSection } from "@/hooks/useActiveSection"
import { useDarkMode } from "@/hooks/useDarkMode"
import { getActiveItemStyle } from "@/utils/activeItemStyle"

export default function FloatingNavigation() {
  const { activeSection, setActiveSection } = useActiveSection()
  const { scrollToSection } = useScrollToSection(setActiveSection)
  const isDark = useDarkMode()

  const getActiveClass = (sectionId: string) => {
    return activeSection === sectionId
      ? "relative rounded-full px-3 py-1 transition-all duration-300 scale-105"
      : ""
  }

  const getActiveStyle = (sectionId: string) => {
    if (activeSection !== sectionId) return {}
    return getActiveItemStyle(isDark)
  }

  return (
    <div className="fixed bottom-10 left-1/2 z-50 flex h-12 -translate-x-1/2 items-center rounded-full border border-gray-200/50 bg-white/70 px-6 whitespace-nowrap shadow-lg backdrop-blur-2xl sm:h-12 sm:px-10 dark:border-gray-700/50 dark:bg-gray-900/60">
      <div className="flex flex-row items-center gap-4 font-medium sm:gap-6 dark:text-white">
        <p
          className={`cursor-pointer text-sm transition-all duration-300 hover:text-blue-500 sm:text-base ${getActiveClass("about-me")}`}
          style={getActiveStyle("about-me")}
          onClick={() => scrollToSection(null)}
        >
          자기소개
        </p>
        <p
          className={`cursor-pointer text-sm transition-all duration-300 hover:text-blue-500 sm:text-base ${getActiveClass("competency")}`}
          style={getActiveStyle("competency")}
          onClick={() => scrollToSection("competency")}
        >
          역량
        </p>
        <p
          className={`cursor-pointer text-sm transition-all duration-300 hover:text-blue-500 sm:text-base ${getActiveClass("skills")}`}
          style={getActiveStyle("skills")}
          onClick={() => scrollToSection("skills")}
        >
          기술
        </p>
        <p
          className={`cursor-pointer text-sm transition-all duration-300 hover:text-blue-500 sm:text-base ${getActiveClass("projects")}`}
          style={getActiveStyle("projects")}
          onClick={() => scrollToSection("projects")}
        >
          프로젝트
        </p>

        <div className="ml-2 flex items-center">
          <ThemeToggleButton />
        </div>
      </div>
    </div>
  )
}
