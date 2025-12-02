import LogoIcon from "@/components/ui/LogoIcon"
import { ImgType } from "@/types/competency"
import React from "react"

interface ProjectCardPreviewProps {
  title: string
  period: string
  description: string
  techLogos: ImgType[]
}

function ProjectCardPreview({
  title,
  period,
  description,
  techLogos,
}: ProjectCardPreviewProps) {
  return (
    <div
      className={`cursor-pointer rounded-lg border border-gray-200 shadow-sm transition duration-300 hover:border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}
    >
      <div className="p-3 sm:p-4">
        <div className={"mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2"}>
          <h5 className="text-lg font-bold sm:text-xl">{title}</h5>
          <p className="text-xs text-gray-400 sm:text-sm">{period}</p>
        </div>
        <p className="mb-3 text-sm text-gray-600 sm:mb-4 sm:text-base dark:text-gray-400">{description}</p>
        <div className="flex flex-row flex-wrap gap-1.5 sm:gap-2">
          {techLogos.map((logo, index) => (
            <LogoIcon
              src={logo.src}
              alt={logo.alt}
              key={index}
              size={30}
              wrapperSize={45}
              blur={false}
              className="rounded-sm px-1 py-1"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default React.memo(ProjectCardPreview)
