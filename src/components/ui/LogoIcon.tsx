import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoBadgeProps {
  src: string;
  alt: string;
  size?: number;
  wrapperSize?: number;
  className?: string;
}

export default function LogoIcon({
                                    src,
                                    alt,
                                    size = 40,
                                    wrapperSize = 66,
                                    className,
                                  }: LogoBadgeProps) {
  return (
    <div
      className={cn(
        "aspect-square flex items-center justify-center bg-white border border-gray-200 rounded-xl p-2 transition-all duration-200",
        "dark:bg-gray-100 dark:border-gray-700 dark:hover:shadow-lg hover:shadow-md",
        className
      )}
      style={{ width: wrapperSize }}
    >
      <div
        className="flex items-center justify-center flex-shrink-0 relative"
        style={{ width: size, height: size }}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-contain"
          sizes={`${size}px`}
          loading="lazy"
        />
      </div>
    </div>
  );
}
