"use client"

import { useEffect, useState } from "react"

const SECTIONS = ["about-me", "competency", "skills", "projects"] as const
const SCROLL_THRESHOLD = 200

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      // 페이지 맨 위에 있을 때는 about-me
      if (window.scrollY < SCROLL_THRESHOLD) {
        setActiveSection("about-me")
        return
      }

      // 각 섹션의 위치 확인 (역순으로 확인하여 가장 아래에 있는 섹션을 찾음)
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTIONS[i])
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(SECTIONS[i])
            return
          }
        }
      }
    }

    handleScroll() // 초기 실행
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { activeSection }
}
