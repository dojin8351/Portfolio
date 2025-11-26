import Image from "next/image";
import { ImgType } from "@/types/common";
import LogoIcon from "@/components/ui/LogoIcon";

interface CompetencyCardProps {
  logos: ImgType[];
  title: string;
  description: string;
}

export default function CompetencyCard({ logos, title, description }: CompetencyCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex-1">
        <p className="text-h4 font-semibold
                dark:text-white">
          {title}
        </p>
        <p className="mt-2 text-sm text-gray-600
                sm:text-base
                dark:text-gray-400">
          {description}
        </p>
      </div>

      <div className="flex flex-row gap-1">
        {logos.map((img, index) => (
          <LogoIcon
            key={index}
            src={img.src}
            alt={img.alt}
            size={15}
            wrapperSize={25}
            className="rounded-sm py-1 px-1"
          />
        ))}
      </div>
    </div>
  );
}