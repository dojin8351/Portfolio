'use client'

import Image from 'next/image'

interface ProfileImageCardProps {
  profileImg: string
  setIsHovering: (hovering: boolean) => void
}

export default function ProfileImageCard({
  profileImg,
  setIsHovering,
}: ProfileImageCardProps) {
  return (
    <div
      className="relative w-full max-w-sm aspect-[4/5] bg-gray-200 dark:bg-gray-900 overflow-hidden mb-0 md:mb-12 group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Image
        src={profileImg}
        alt="Profile"
        fill
        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
      />
      <div className="absolute inset-0 border border-gray-400/20 dark:border-white/10 group-hover:border-gray-600/40 dark:group-hover:border-white/30 transition-colors duration-500 pointer-events-none" />
    </div>
  )
}
