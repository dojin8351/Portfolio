'use client'

import { Code, Server, Database, PenTool } from 'lucide-react'
import { SkillType } from '@/types/competency'
import SkillCategory from './SkillCategory'

interface SkillsViewProps {
  skills: SkillType[]
  onBackToIntro: () => void
  setIsHovering: (hovering: boolean) => void
  isVisible: boolean
}

export default function SkillsView({
  skills,
  onBackToIntro,
  setIsHovering,
  isVisible,
}: SkillsViewProps) {
  // 스킬 데이터 그룹화
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.status]) acc[skill.status] = []
      acc[skill.status].push(skill)
      return acc
    },
    {} as Record<string, SkillType[]>
  )

  const categoryIcons = {
    Frontend: Code,
    Backend: Server,
    DevOps: Database,
    Tools: PenTool,
  }

  return (
    <div
      className={`
        absolute inset-0 bg-[#FAFAF9] dark:bg-[#111] z-30 overflow-y-auto hide-scrollbar view-transition flex flex-col items-center
        ${isVisible ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-4'}
      `}
    >
      <div className="max-w-7xl w-full px-8 md:px-12 py-32 md:py-40">
        {/* Skills Header */}
        <div className="mb-24 md:mb-32">
          <h2 className="text-sm md:text-base text-gray-600 dark:text-gray-500 tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
            Capabilities
          </h2>
          <h1 className="text-6xl md:text-8xl font-light leading-none tracking-tight animate-fade-in-up delay-100 text-gray-900 dark:text-[#f0f0f0]">
            Tech Stack <br /> &{' '}
            <span className="font-serif italic text-gray-600 dark:text-gray-600">Expertise</span>
          </h1>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
          {Object.entries(groupedSkills).map(([category, categorySkills], catIndex) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons] || Code
            return (
              <SkillCategory
                key={category}
                category={category}
                skills={categorySkills}
                icon={Icon}
                catIndex={catIndex}
                setIsHovering={setIsHovering}
              />
            )
          })}
        </div>

        {/* Back to Home Button at bottom */}
        <div className="mt-32 pt-20 border-t border-gray-300 dark:border-gray-900 text-center">
          <button
            onClick={onBackToIntro}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="text-2xl md:text-4xl font-serif italic hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-600 transition-colors duration-500 cursor-none"
          >
            Back to Intro
          </button>
        </div>
      </div>
    </div>
  )
}
