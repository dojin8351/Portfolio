import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { ImgType } from "@/types/competency"

interface ProjectImageCarouselProps {
  images: ImgType[]
}

export default function ProjectImageCarousel({
  images,
}: ProjectImageCarouselProps) {
  return (
    <div className="relative">
      <Carousel>
        <CarouselContent className="-ml-4">
          {images.map((img, index) => (
            <CarouselItem key={img.src} className="basis-full pl-4">
              <div className="flex justify-center">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={500}
                  className="mt-5 h-auto w-full rounded-md object-contain"
                  sizes="(max-width: 768px) 100vw, 800px"
                  loading={index === 0 ? undefined : "lazy"}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 cursor-pointer border border-gray-300 bg-white/70 text-gray-800 shadow-md backdrop-blur-lg hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-200 dark:shadow-lg dark:hover:bg-gray-700" />

        <CarouselNext className="right-2 cursor-pointer border border-gray-300 bg-white/70 text-gray-800 shadow-md backdrop-blur-lg hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-200 dark:shadow-lg dark:hover:bg-gray-700" />
      </Carousel>
    </div>
  )
}
