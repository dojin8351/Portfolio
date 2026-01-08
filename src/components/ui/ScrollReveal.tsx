'use client'

import { ReactNode } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  threshold?: number
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  threshold = 0.1,
}: ScrollRevealProps) {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce: true,
  })

  const directionClasses = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
  }

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={cn(
        'transition-all duration-700 ease-out',
        !isVisible && 'opacity-0 ' + directionClasses[direction],
        isVisible && 'opacity-100 translate-y-0 translate-x-0',
        className
      )}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
