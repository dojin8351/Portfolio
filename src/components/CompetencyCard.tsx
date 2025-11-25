import Image from "next/image";
import {ImgType} from "@/types/common";

interface CompetencyCardProps {
  logos: ImgType[];
  title: string;
  description: string;
}

export default function CompetencyCard({ logos, title, description }: CompetencyCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex-1">
        <p className="text-xl sm:text-h2 font-semibold dark:text-white">{title}</p>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">{description}</p>
      </div>
      <div className={'flex flex-row gap-1'}>
        {logos.map((img, index) => (
          <div key={index} className="w-5 h-5 relative flex-shrink-0">
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
  );
}
