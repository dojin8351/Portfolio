'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SkillType } from '@/types/competency'

interface SkillItemProps {
  skill: SkillType
  setIsHovering: (hovering: boolean) => void
}

export default function SkillItem({ skill, setIsHovering }: SkillItemProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex items-center justify-between py-2 border-b border-gray-300 dark:border-gray-800 group-hover:border-gray-900 dark:group-hover:border-white transition-colors duration-500">
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
            {!imageError ? (
              <Image
                src={skill.src}
                alt={skill.alt}
                width={24}
                height={24}
                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                onError={() => setImageError(true)}
              />
            ) : (
              <span className="text-[10px] font-mono border border-gray-400 dark:border-gray-700 px-1 rounded">
                IMG
              </span>
            )}
          </div>
          <span className="text-lg md:text-xl lg:text-2xl font-light text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white active:text-gray-900 dark:active:text-white transition-colors duration-300">
            {skill.alt}
          </span>
        </div>
        <span className="text-xs md:text-sm font-mono text-gray-600 dark:text-gray-600 group-hover:text-gray-900 dark:group-hover:text-white active:text-gray-900 dark:active:text-white transition-colors">
          {skill.proficiency}%
        </span>
      </div>

      {/* Proficiency Bar (Visual only on hover) */}
      <div
        className="absolute bottom-0 left-0 h-[1px] bg-gray-900 dark:bg-white w-0 group-hover:w-full transition-all duration-700 ease-out"
        style={{ width: `0%` }}
      ></div>
      <div
        className="absolute bottom-0 left-0 h-[1px] bg-transparent group-hover:bg-gray-900 dark:group-hover:bg-white transition-all duration-1000 ease-out delay-100"
        style={{ width: '0%' }}
      />
    </div>
  )
}
