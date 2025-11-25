import Image from "next/image";
import {ImgType} from "@/types/common";

interface CompetencyCardProps {
  logos: ImgType[];
  title: string;
  description: string;
}

export default function CompetencyCard({ logos, title, description }: CompetencyCardProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-5">
      <div className="p-6 sm:p-8 rounded-lg w-full sm:w-[160px] sm:max-w-[160px] h-auto sm:h-[160px] sm:max-h-[160px] min-w-[160px] min-h-[160px] flex-shrink-0 bg-gray-200 dark:bg-gray-800 grid grid-cols-2 gap-2 place-items-center mx-auto sm:mx-0">
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
      <div className="flex-1">
        <p className="text-xl sm:text-h2 font-semibold dark:text-white">{title}</p>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );
}
