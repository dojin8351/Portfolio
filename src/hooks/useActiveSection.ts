"use client"

import { useEffect, useState, useRef } from "react"

const SECTIONS = ["about-me", "competency", "skills", "projects"] as const
const SCROLL_THRESHOLD = 200

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("")
  const rafIdRef = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current)
      }

      rafIdRef.current = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + window.innerHeight / 3

        if (window.scrollY < SCROLL_THRESHOLD) {
          setActiveSection("about-me")
          return
        }

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
      })
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [])

  return { activeSection }
}
