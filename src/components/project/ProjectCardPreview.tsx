import LogoIcon from "@/components/ui/LogoIcon";
import { ImgType } from "@/types/competency";

interface ProjectCardPreviewProps {
  title: string;
  period: string;
  description: string;
  techLogos: ImgType[];
}

export default function ProjectCardPreview({
  title,
  period,
  description,
  techLogos,
}: ProjectCardPreviewProps) {
  return (
    <div
      className={`rounded-lg shadow-sm border border-gray-200 cursor-pointer
                 transition duration-300
                 hover:border-gray-300 hover:bg-gray-100
                dark:border-gray-700 dark:bg-gray-800
                dark:hover:bg-gray-700`}
    >
      <div className="p-4">
        <div className={"flex flex-row gap-2 items-center mb-2"}>
          <h5 className="text-xl font-bold">{title}</h5>
          <p className="text-gray-400">{period}</p>
        </div>
        <p className="text-gray-600 mb-4 dark:text-gray-400">{description}</p>
        <div className="flex flex-row gap-2">
          {techLogos.map((logo, index) => (
            <LogoIcon
              src={logo.src}
              alt={logo.alt}
              key={index}
              size={15}
              wrapperSize={30}
              className="rounded-sm py-1 px-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

