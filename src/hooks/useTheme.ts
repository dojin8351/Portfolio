"use client"

import { useEffect, useState } from "react"

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
    const saved = localStorage.getItem("theme") as "light" | "dark" | null
    const html = document.documentElement

    if (saved) {
      setTheme(saved)
      if (saved === "dark") {
        html.classList.add("dark")
      } else {
        html.classList.remove("dark")
      }
    } else {
      // 기본값 설정
      html.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light"
    setTheme(next)
    const html = document.documentElement

    if (next === "dark") {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }

    localStorage.setItem("theme", next)
  }

  return { theme, toggleTheme, mounted }
}
