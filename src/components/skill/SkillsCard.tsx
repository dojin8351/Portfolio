import { ImgType } from "@/types/common"
import LogoIcon from "@/components/ui/LogoIcon"
import React from "react"
import { SkillType } from "@/types/competency"

interface SkillsCardProps {
  skillInfo: SkillType[]
  filter?: string
}

function SkillsCard({ skillInfo, filter }: SkillsCardProps) {
  return (
    <div className="flex w-full flex-col">
      <div className="grid w-full grid-cols-5 place-items-center gap-2 rounded-2xl border border-gray-200 bg-gray-100 p-3 shadow-sm sm:grid-cols-5 sm:gap-3 sm:p-4 md:grid-cols-6 md:gap-2 md:p-6 lg:gap-5 lg:p-8 dark:bg-gray-800 dark:shadow-md">
        {filter === "ALL"
          ? skillInfo.map((skill, index) => (
              <LogoIcon
                key={index}
                src={skill.src}
                alt={skill.alt}
                size={32}
                wrapperSize={52}
                blur={false}
                proficiency={skill.proficiency}
                className="w-[70px] sm:w-[75px] md:w-[85px] lg:w-[85px] [&>div]:h-8 [&>div]:w-8 sm:[&>div]:h-10 sm:[&>div]:w-10 md:[&>div]:h-12 md:[&>div]:w-12 lg:[&>div]:h-14 lg:[&>div]:w-14"
              />
            ))
          : skillInfo.map((skill, index) => (
              <LogoIcon
                key={index}
                src={skill.src}
                alt={skill.alt}
                size={32}
                wrapperSize={52}
                blur={skill.status !== filter}
                proficiency={skill.proficiency}
                className="w-[70px] sm:w-[75px] md:w-[85px] lg:w-[85px] [&>div]:h-8 [&>div]:w-8 sm:[&>div]:h-10 sm:[&>div]:w-10 md:[&>div]:h-12 md:[&>div]:w-12 lg:[&>div]:h-14 lg:[&>div]:w-14"
              />
            ))}
      </div>
    </div>
  )
}

export default React.memo(SkillsCard)
