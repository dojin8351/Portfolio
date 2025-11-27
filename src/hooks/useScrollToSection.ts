"use client"

import { useCallback } from "react"

export function useScrollToSection() {
  const scrollToSection = useCallback((sectionId: string | null) => {
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  return { scrollToSection }
}
