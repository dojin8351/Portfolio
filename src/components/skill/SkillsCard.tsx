import { ImgType } from "@/types/common"
import LogoIcon from "@/components/ui/LogoIcon"
import React from "react"

interface SkillsCardProps {
  logos: ImgType[]
  title: string
}

function SkillsCard({ logos, title }: SkillsCardProps) {
  return (
    <div className="flex w-full flex-col gap-1">
      <p className="text-lg font-semibold sm:text-xl dark:text-white">
        {title}
      </p>
      <div className="grid w-full grid-cols-3 place-items-center gap-1 rounded-2xl bg-gray-100 p-4 shadow-sm sm:gap-1 sm:p-6 md:p-8 dark:bg-gray-800 dark:shadow-md">
        {logos.map((img, index) => (
          <LogoIcon
            key={index}
            src={img.src}
            alt={img.alt}
            size={40}
            wrapperSize={66}
          />
        ))}
      </div>
    </div>
  )
}

export default React.memo(SkillsCard)
