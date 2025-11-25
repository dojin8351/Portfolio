'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition cursor-pointer"
    >
      {theme === 'light' ? <Moon size={20} color={'#8DA4C2'} /> : <Sun size={20} color={'#FFBC6C'} />}
    </button>
  )
}
