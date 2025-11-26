import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { ImgType } from "@/types/competency";

interface ProjectImageCarouselProps {
  images: ImgType[];
}

export default function ProjectImageCarousel({ images }: ProjectImageCarouselProps) {
  return (
    <div className="relative">
      <Carousel>
        <CarouselContent className="-ml-4">
          {images.map((img, index) => (
            <CarouselItem key={index} className="pl-4 basis-full">
              <div className="flex justify-center">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={500}
                  className="rounded-md w-full h-auto object-contain"
                  sizes="(max-width: 768px) 100vw, 800px"
                  loading={index === 0 ? undefined : "lazy"}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="
              left-2 cursor-pointer
              bg-white/70 dark:bg-gray-800/80
              border border-gray-300 dark:border-gray-600
              text-gray-800 dark:text-gray-200
              shadow-md dark:shadow-lg
              hover:bg-gray-100 dark:hover:bg-gray-700
              backdrop-blur-lg
            "/>

        <CarouselNext
          className="
              right-2 cursor-pointer
              bg-white/70 dark:bg-gray-800/80
              border border-gray-300 dark:border-gray-600
              text-gray-800 dark:text-gray-200
              shadow-md dark:shadow-lg
              hover:bg-gray-100 dark:hover:bg-gray-700
              backdrop-blur-lg
            "/>
      </Carousel>
    </div>
  );
}

