import {ImgType} from "@/types/common";
import Image from "next/image";

interface SkillsCardProps {
  logos : ImgType[]
  title : string
}

export default function SkillsCard({logos, title} : SkillsCardProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <p className={'text-lg sm:text-xl font-semibold dark:text-white'}>{title}</p>
      <div className="p-6 sm:p-8 rounded-lg w-full sm:w-[260px] sm:max-w-[260px] h-auto sm:h-[260px] sm:max-h-[260px] min-w-0 sm:min-w-[160px] min-h-[160px] flex-shrink-0 bg-gray-200 dark:bg-gray-800 grid grid-cols-3 gap-2 place-items-center">
        {logos.map((img, index) => (
          <div key={index} className="w-12 h-12 relative flex-shrink-0">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain"
              sizes="64px"
            />
          </div>
        ))}
      </div>
    </div>
  )
}