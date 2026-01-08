'use client'

import { useEffect, useState } from 'react'
import { useIsMobile } from '@/hooks/useIsMobile'

interface CustomCursorProps {
  isHovering: boolean
  hideCursor?: boolean
}

export default function CustomCursor({ isHovering, hideCursor = false }: CustomCursorProps) {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 })
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isMobile) return

    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [isMobile])

  // 모바일이거나 커서를 숨겨야 하는 경우 렌더링하지 않음
  if (isMobile || hideCursor) {
    return null
  }

  return (
    <div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference hidden md:block"
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
