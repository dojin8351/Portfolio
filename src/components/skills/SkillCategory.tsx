'use client'

import { LucideIcon } from 'lucide-react'
import { SkillType } from '@/types/competency'
import SkillItem from './SkillItem'

interface SkillCategoryProps {
  category: string
  skills: SkillType[]
  icon: LucideIcon
  catIndex: number
  setIsHovering: (hovering: boolean) => void
}

export default function SkillCategory({
  category,
  skills,
  icon: Icon,
  catIndex,
  setIsHovering,
}: SkillCategoryProps) {
  return (
    <div
      className="space-y-12 animate-fade-in-up"
      style={{ animationDelay: `${200 + catIndex * 100}ms` }}
    >
      <div className="border-t border-gray-900 dark:border-white pt-4">
        <h3 className="text-sm font-medium uppercase tracking-widest mb-8 flex items-center gap-2 text-gray-700 dark:text-white">
          <Icon size={16} />
          {category}
        </h3>
        <div className="space-y-6">
          {skills.map((skill, idx) => (
            <SkillItem
              key={idx}
              skill={skill}
              setIsHovering={setIsHovering}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
