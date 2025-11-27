import Image from "next/image"
import { cn } from "@/lib/utils"
import React from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface LogoBadgeProps {
  src: string
  alt: string
  size?: number
  wrapperSize?: number
  className?: string
}

function LogoIcon({
  src,
  alt,
  size = 40,
  wrapperSize = 66,
  className,
}: LogoBadgeProps) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div
          className={cn(
            "flex aspect-square items-center justify-center rounded-xl border border-gray-200 bg-white p-2 transition-all duration-200",
            "hover:shadow-md dark:border-gray-700 dark:bg-gray-100 dark:hover:shadow-lg",
            className
          )}
          style={{ width: wrapperSize }}
        >
          <div
            className="relative flex flex-shrink-0 items-center justify-center"
            style={{ width: size, height: size }}
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
      </TooltipTrigger>
      <TooltipContent className="dark:shadow-2xl">{alt}</TooltipContent>
    </Tooltip>
  )
}

export default React.memo(LogoIcon)
