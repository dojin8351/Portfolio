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
      <div className="grid w-full grid-cols-4 place-items-center gap-1.5 rounded-2xl border border-gray-200 bg-gray-100 p-2 shadow-sm sm:grid-cols-5 sm:gap-2 sm:p-3 md:grid-cols-6 md:gap-2 md:p-4 lg:gap-3 lg:p-6 xl:p-8 dark:bg-gray-800 dark:shadow-md">
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
                className="w-[60px] sm:w-[70px] md:w-[75px] lg:w-[85px] [&>div]:h-7 [&>div]:w-7 sm:[&>div]:h-8 sm:[&>div]:w-8 md:[&>div]:h-10 md:[&>div]:w-10 lg:[&>div]:h-12 lg:[&>div]:w-12 xl:[&>div]:h-14 xl:[&>div]:w-14"
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
                className="w-[60px] sm:w-[70px] md:w-[75px] lg:w-[85px] [&>div]:h-7 [&>div]:w-7 sm:[&>div]:h-8 sm:[&>div]:w-8 md:[&>div]:h-10 md:[&>div]:w-10 lg:[&>div]:h-12 lg:[&>div]:w-12 xl:[&>div]:h-14 xl:[&>div]:w-14"
              />
            ))}
      </div>
    </div>
  )
}

export default React.memo(SkillsCard)
