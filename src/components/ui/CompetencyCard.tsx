import Image from "next/image";
import { ImgType } from "@/types/common";

interface CompetencyCardProps {
  logos: ImgType[];
  title: string;
  description: string;
}

export default function CompetencyCard({ logos, title, description }: CompetencyCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex-1">
        <p className="text-h3 font-semibold
                dark:text-white">
          {title}
        </p>
        <p className="mt-2 text-sm text-gray-600
                sm:text-base
                dark:text-gray-400">
          {description}
        </p>
      </div>

      <div className="flex flex-row gap-2 mt-1">
        {logos.map((img, index) => (
          <div
            key={index}
            className="
              w-7 h-7 aspect-square flex items-center justify-center rounded-md bg-white
              border border-gray-300 p-1
              dark:bg-gray-100 dark:border-gray-600
            "
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}