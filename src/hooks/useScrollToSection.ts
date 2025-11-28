"use client"

import { useCallback } from "react"

export function useScrollToSection(
  setActiveSection?: (section: string) => void
) {
  const scrollToSection = useCallback(
    (sectionId: string | null) => {
      if (!sectionId) {
        if (setActiveSection) {
          setActiveSection("about-me")
        }
        window.scrollTo({ top: 0, behavior: "smooth" })
        return
      }

      const element = document.getElementById(sectionId)
      if (element) {
        // 즉시 activeSection 업데이트 (스크롤 시작 전)
        if (setActiveSection) {
          setActiveSection(sectionId)
        }
        // 스크롤 실행
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    },
    [setActiveSection]
  )

  return { scrollToSection }
}
