"use client"

import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { ImgType } from "@/types/competency"
import { generateBlurDataURL } from "@/lib/imageUtils"

interface ProjectImageCarouselProps {
  images: ImgType[]
}

export default function ProjectImageCarousel({
  images,
}: ProjectImageCarouselProps) {
  return (
    <div className="relative w-full">
      <Carousel>
        <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
          {images.map((img, index) => (
            <CarouselItem
              key={img.src}
              className="basis-full pl-1 sm:basis-1/2 sm:pl-2 md:basis-1/3 md:pl-4"
            >
              <div className="w-full">
                <ImageDialog image={img} images={images} initialIndex={index} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1 cursor-pointer border border-gray-300 bg-white/70 text-gray-800 shadow-md backdrop-blur-lg hover:bg-gray-100 sm:left-2 dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-200 dark:shadow-lg dark:hover:bg-gray-700" />

        <CarouselNext className="right-1 cursor-pointer border border-gray-300 bg-white/70 text-gray-800 shadow-md backdrop-blur-lg hover:bg-gray-100 sm:right-2 dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-200 dark:shadow-lg dark:hover:bg-gray-700" />
      </Carousel>
    </div>
  )
}

interface ImageDialogProps {
  image: ImgType
  images: ImgType[]
  initialIndex: number
}

function ImageDialog({ image, images, initialIndex }: ImageDialogProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!api || !isOpen) return

    api.scrollTo(initialIndex)
  }, [api, isOpen, initialIndex])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="group relative w-full cursor-pointer overflow-hidden rounded-md transition-transform hover:scale-105">
          <Image
            src={image.src}
            alt={image.alt}
            width={800}
            height={500}
            className="mt-5 h-auto w-full rounded-md border border-gray-200 object-cover transition-opacity group-hover:opacity-90 dark:border-gray-700"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            priority={initialIndex < 3}
            placeholder="blur"
            blurDataURL={generateBlurDataURL(800, 500)}
            quality={85}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/10">
            <div className="rounded-full bg-white/80 p-2 opacity-0 transition-opacity group-hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="flex h-[85vh]! w-[95vw]! max-w-[95vw]! grid-rows-none! flex-col gap-0 border-none bg-white p-2 overflow-x-hidden sm:w-[80vw]! sm:max-w-[80vw]! sm:p-4 md:p-10 dark:bg-gray-800">
        <DialogTitle className="sr-only">이미지 확대 보기</DialogTitle>
        <div className="relative flex min-h-0 flex-1 items-center justify-center w-full overflow-hidden">
          <Carousel
            setApi={setApi}
            className="flex h-full w-full items-center justify-center"
          >
            <CarouselContent className="h-full [&>div]:h-full [&>div>div]:flex [&>div>div]:h-full [&>div>div]:items-center [&>div>div]:justify-center">
              {images.map((dialogImg, dialogIndex) => (
                <CarouselItem
                  key={dialogImg.src}
                  className="flex h-full basis-full items-center justify-center"
                >
                  <div className="flex h-full w-full items-center justify-center px-1">
                    <Image
                      src={dialogImg.src}
                      alt={dialogImg.alt}
                      width={1920}
                      height={1080}
                      className="h-auto max-h-full w-auto max-w-full rounded-md border border-gray-200 object-contain dark:border-gray-700"
                      sizes="(100vw - 2rem)"
                      priority={dialogIndex === initialIndex}
                      placeholder="blur"
                      blurDataURL={generateBlurDataURL(1920, 1080)}
                      quality={90}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 border-2 border-gray-300 bg-white/80 text-gray-800 backdrop-blur-lg hover:border-gray-400 hover:bg-gray-100 sm:left-2 md:left-4 dark:border-gray-600 dark:bg-gray-700/80 dark:text-gray-200 dark:shadow-lg dark:hover:bg-gray-600" />
            <CarouselNext className="right-1 border-2 border-gray-300 bg-white/80 text-gray-800 backdrop-blur-lg hover:border-gray-400 hover:bg-gray-100 sm:right-2 md:right-4 dark:border-gray-600 dark:bg-gray-700/80 dark:text-gray-200 dark:shadow-lg dark:hover:bg-gray-600" />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  )
}
