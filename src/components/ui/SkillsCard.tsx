import { ImgType } from "@/types/common";
import Image from "next/image";

interface SkillsCardProps {
  logos: ImgType[];
  title: string;
}

export default function SkillsCard({ logos, title }: SkillsCardProps) {
  return (
    <div className="flex w-full flex-col gap-1">
      {/* 타이틀 */}
      <p className="text-lg font-semibold
              sm:text-xl
              dark:text-white">
        {title}
      </p>
      <div
        className="
          bg-gray-100 rounded-2xl p-4 shadow-sm w-full grid grid-cols-3 gap-1 place-items-center
          sm:p-6 sm:gap-1
          md:p-8
          dark:bg-gray-800 dark:shadow-md"
      >
        {logos.map((img, index) => (
          <div
            key={index}
            className="
              aspect-square w-full max-w-[75px] flex items-center justify-center bg-white border
              border-gray-200 rounded-xl p-2 transition-all duration-200
              sm:max-w-[80px]
              md:max-w-[90px]
              dark:bg-gray-100 dark:border-gray-700 dark:hover:shadow-lg
              hover:shadow-md
            "
          >
            <div className="flex relative w-12 h-12 flex-shrink-0 items-center justify-center">
              <Image
                src={img.src}
                alt={img.alt}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}