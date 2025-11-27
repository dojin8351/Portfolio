"use client"

import { useEffect, useState } from "react"
import ThemeToggleButton from "../ui/ThemeToggleButton"
import { useScrollToSection } from "@/hooks/useScrollToSection"
import { useActiveSection } from "@/hooks/useActiveSection"

export default function FloatingNavigation() {
  const [isVisible, setIsVisible] = useState(false)
  const { activeSection } = useActiveSection()
  const { scrollToSection } = useScrollToSection()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }

    checkDarkMode()
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  if (!isVisible) return null

  const getActiveClass = (sectionId: string) => {
    return activeSection === sectionId
      ? "relative rounded-full px-3 py-1.5 transition-all duration-300 scale-105"
      : ""
  }

  const getActiveStyle = (sectionId: string) => {
    if (activeSection !== sectionId) return {}

    if (isDark) {
      return {
        background:
          "linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(96, 165, 250, 0.35) 50%, rgba(59, 130, 246, 0.25) 100%)",
        boxShadow: `
          inset 0 1px 3px rgba(255, 255, 255, 0.2),
          inset 0 -1px 2px rgba(0, 0, 0, 0.3),
          0 4px 16px rgba(59, 130, 246, 0.4),
          0 0 0 1px rgba(96, 165, 250, 0.5)
        `,
        backdropFilter: "blur(12px)",
      }
    }

    return {
      background:
        "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 197, 253, 0.25) 50%, rgba(59, 130, 246, 0.15) 100%)",
      boxShadow: `
        inset 0 1px 2px rgba(255, 255, 255, 0.4),
        inset 0 -1px 2px rgba(0, 0, 0, 0.1),
        0 4px 12px rgba(59, 130, 246, 0.3),
        0 0 0 1px rgba(147, 197, 253, 0.4)
      `,
      backdropFilter: "blur(12px)",
    }
  }

  return (
    <div className="fixed top-6 left-1/2 z-50 flex h-12 -translate-x-1/2 items-center rounded-full border border-gray-200/50 bg-white/70 px-6 whitespace-nowrap shadow-lg backdrop-blur-2xl sm:h-12 sm:px-10 dark:border-gray-700/50 dark:bg-gray-900/60">
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
