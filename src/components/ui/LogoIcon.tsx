"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import React, { useState, useEffect, useRef } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Progress } from "@/components/ui/progress"

interface LogoBadgeProps {
  src: string
  alt: string
  size?: number
  wrapperSize?: number
  className?: string
  blur: boolean
  proficiency?: number
}

function LogoIcon({
  src,
  alt,
  size = 40,
  wrapperSize = 66,
  blur,
  className,
  proficiency,
}: LogoBadgeProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isTouchMode, setIsTouchMode] = useState(false)
  const triggerRef = useRef<HTMLDivElement>(null)

  // className에 width가 포함되어 있으면 style을 사용하지 않음
  const hasWidthInClassName =
    className?.includes("w-") || className?.includes("width")
  const wrapperStyle = hasWidthInClassName ? undefined : { width: wrapperSize }
  const innerStyle = hasWidthInClassName
    ? undefined
    : { width: size, height: size }

  const handleTouchStart = (e: React.TouchEvent) => {
    // 터치 모드 활성화
    setIsTouchMode(true)
    // 터치 시 토글 (열려있으면 닫고, 닫혀있으면 열기)
    e.preventDefault()
    setIsOpen((prev) => !prev)
  }

  const handleClick = (e: React.MouseEvent) => {
    // 데스크톱에서 클릭 시에도 토글
    if (!isTouchMode) {
      e.preventDefault()
      setIsOpen((prev) => !prev)
    }
  }

  const handleOpenChange = (open: boolean) => {
    // 터치 모드가 아닐 때만 외부 클릭으로 닫기 허용
    if (!isTouchMode) {
      setIsOpen(open)
    }
  }

  // 외부 터치 감지
  useEffect(() => {
    if (!isOpen || !isTouchMode) return

    const handleDocumentTouch = (e: TouchEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
        setIsTouchMode(false)
      }
    }

    // 약간의 지연을 두어 현재 터치 이벤트가 처리된 후에 리스너 추가
    const timeoutId = setTimeout(() => {
      document.addEventListener("touchstart", handleDocumentTouch, { passive: true })
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener("touchstart", handleDocumentTouch)
    }
  }, [isOpen, isTouchMode])

  return (
    <Tooltip open={isOpen} onOpenChange={handleOpenChange}>
      <TooltipTrigger
        onTouchStart={handleTouchStart}
        onClick={handleClick}
        asChild
      >
        {blur ? (
          <div
            ref={triggerRef}
            className={cn(
              "flex aspect-square items-center justify-center rounded-xl border border-gray-200 bg-white p-2 blur-sm transition-all duration-200",
              "hover:shadow-md dark:border-gray-700 dark:bg-gray-100 dark:hover:shadow-lg",
              className
            )}
            style={wrapperStyle}
          >
            <div
              className="relative flex flex-shrink-0 items-center justify-center"
              style={innerStyle}
            >
              <Image
                src={src}
                alt={alt}
                width={size}
                height={size}
                className="object-contain"
                sizes={`${size}px`}
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          <div
            ref={triggerRef}
            className={cn(
              "flex aspect-square items-center justify-center rounded-xl border border-gray-200 bg-white p-2 blur-none transition-all duration-200",
              "hover:shadow-md dark:border-gray-700 dark:bg-gray-100 dark:hover:shadow-lg",
              className
            )}
            style={wrapperStyle}
          >
            <div
              className="relative flex flex-shrink-0 items-center justify-center"
              style={innerStyle}
            >
              <Image
                src={src}
                alt={alt}
                width={size}
                height={size}
                className="object-contain"
                sizes={`${size}px`}
                loading="lazy"
              />
            </div>
          </div>
        )}
      </TooltipTrigger>
      <TooltipContent className="dark:shadow-2xl">
        <p className="my-2 font-medium">{alt}</p>
        {proficiency && (
          <div className="mb-2 flex flex-row items-center gap-2 text-sm">
            <Progress value={proficiency} className="w-[125px]" />
            <p>{proficiency}%</p>
          </div>
        )}
      </TooltipContent>
    </Tooltip>
  )
}

export default React.memo(LogoIcon)
