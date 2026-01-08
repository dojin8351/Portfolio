'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { useState } from 'react'

export default function AristideThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()
  const [isHovering, setIsHovering] = useState(false)

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 z-50 p-3 md:p-4 rounded-full border border-gray-700 dark:border-gray-300 bg-black/50 dark:bg-white/10 backdrop-blur-md hover:border-white dark:hover:border-white hover:bg-white/10 dark:hover:bg-white/20 active:border-white dark:active:border-white active:bg-white/10 dark:active:bg-white/20 transition-all duration-300 md:cursor-none group min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {theme === 'light' ? (
          <Moon
            className="w-6 h-6 text-gray-400 dark:text-gray-300 group-hover:text-white transition-colors duration-300"
            strokeWidth={1.5}
          />
        ) : (
          <Sun
            className="w-6 h-6 text-gray-400 dark:text-gray-300 group-hover:text-white transition-colors duration-300"
            strokeWidth={1.5}
          />
        )}
      </div>
      {isHovering && (
        <span className="absolute -top-8 right-0 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest whitespace-nowrap pointer-events-none">
          {theme === 'light' ? 'Dark' : 'Light'}
        </span>
      )}
    </button>
  )
}
