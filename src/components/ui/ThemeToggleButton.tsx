"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/hooks/useTheme"

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer rounded-full bg-gray-200 p-2 transition dark:bg-gray-800"
    >
      {theme === "light" ? (
        <Moon size={20} color={"#8DA4C2"} />
      ) : (
        <Sun size={20} color={"#FFBC6C"} />
      )}
    </button>
  )
}
