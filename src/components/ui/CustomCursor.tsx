'use client'

import { useEffect, useState } from 'react'

interface CustomCursorProps {
  isHovering: boolean
  hideCursor?: boolean
}

export default function CustomCursor({ isHovering, hideCursor = false }: CustomCursorProps) {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  if (hideCursor) {
    return null
  }

  return (
    <div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
      style={{
        transform: `translate(${cursorPos.x - 16}px, ${cursorPos.y - 16}px)`,
        transition: 'transform 0.1s ease-out, width 0.3s, height 0.3s',
      }}
    >
      <div
        className={`
          w-full h-full rounded-full bg-white transition-all duration-300 aristide-ease flex items-center justify-center
          ${isHovering ? 'scale-[2.5]' : 'scale-100'}
        `}
      >
        {isHovering && (
          <span className="text-[4px] text-black font-bold tracking-widest uppercase">
            View
          </span>
        )}
      </div>
    </div>
  )
}
