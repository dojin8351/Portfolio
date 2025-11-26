import { ImgType } from "@/types/common";
import LogoIcon from "@/components/ui/LogoIcon";

interface SkillsCardProps {
  logos: ImgType[];
  title: string;
}

export default function SkillsCard({ logos, title }: SkillsCardProps) {
  return (
    <div className="flex w-full flex-col gap-1">
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
  );
}