'use client'

import Image from 'next/image'
import { ImgType } from '@/types/common'

interface ProjectGalleryProps {
  images: ImgType[]
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <div className="mt-32 space-y-8">
      <h3 className="text-sm text-gray-600 dark:text-gray-500 uppercase tracking-widest mb-8">
        Project Gallery
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden bg-gray-200 dark:bg-gray-900 ${
              idx % 3 === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
