import Image from "next/image"
import { cn } from "@/lib/utils"
import React from "react"
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
  // className에 width가 포함되어 있으면 style을 사용하지 않음
  const hasWidthInClassName =
    className?.includes("w-") || className?.includes("width")
  const wrapperStyle = hasWidthInClassName ? undefined : { width: wrapperSize }
  const innerStyle = hasWidthInClassName
    ? undefined
    : { width: size, height: size }

  return (
    <Tooltip>
      <TooltipTrigger>
        {blur ? (
          <div
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
