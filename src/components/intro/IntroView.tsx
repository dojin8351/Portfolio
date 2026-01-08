'use client'

import { ArrowRight, Code, BookOpen } from 'lucide-react'
import { AboutMeType } from '@/types/aboutMe'
import ProfileImageCard from './ProfileImageCard'
import AchievementsList from './AchievementsList'

interface IntroViewProps {
  aboutMeData: AboutMeType
  onEnterProjects: () => void
  onEnterSkills: () => void
  setIsHovering: (hovering: boolean) => void
  isVisible: boolean
}

export default function IntroView({
  aboutMeData,
  onEnterProjects,
  onEnterSkills,
  setIsHovering,
  isVisible,
}: IntroViewProps) {
  return (
    <div
      className={`
        absolute inset-0 flex items-center justify-center px-8 md:px-12 view-transition
        ${isVisible ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-4'}
      `}
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 py-20 md:py-0">
        {/* Left Column: Text Content */}
        <div className="w-full md:flex-1 flex flex-col justify-center space-y-8 z-10 pt-20 md:pt-0">
          <div className="space-y-2 animate-fade-in-up">
            <h2 className="text-sm md:text-base text-gray-500 dark:text-gray-400 tracking-[0.3em] uppercase">
              {aboutMeData.job}
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1] tracking-tight whitespace-nowrap">
              {aboutMeData.name}
              <span className="text-gray-400 dark:text-gray-600">.</span>
            </h1>
          </div>

          <div className="h-px w-24 bg-gray-300 dark:bg-gray-700 my-4"></div>

          {/* 기술적 USP 강조 */}
          {aboutMeData.techUSP && (
            <div className="mb-6 animate-fade-in-up delay-100">
              <p className="text-lg md:text-xl font-medium text-gray-900 dark:text-[#f0f0f0] leading-relaxed italic">
                {aboutMeData.techUSP}
              </p>
            </div>
          )}

          <div className="space-y-4 max-w-lg">
            {aboutMeData.introductions.map((text, idx) => (
              <p
                key={idx}
                className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed animate-fade-in-up"
                style={{ animationDelay: `${(idx + 2) * 0.1}s` }}
              >
                {text}
              </p>
            ))}
          </div>

          <div className="pt-8 flex flex-col md:flex-row gap-8 md:items-center">
            <button
              onClick={onEnterProjects}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onEnterProjects()
                }
              }}
              aria-label="프로젝트 보기"
              className="group flex items-center gap-4 text-lg md:text-xl tracking-widest uppercase cursor-none w-max focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-sm"
            >
              <span className="border-b border-transparent group-hover:border-gray-900 dark:group-hover:border-white transition-all duration-500">
                See Projects
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
            </button>

            <button
              onClick={onEnterSkills}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onEnterSkills()
                }
              }}
              aria-label="스킬 보기"
              className="group flex items-center gap-4 text-lg md:text-xl tracking-widest uppercase cursor-none text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-500 w-max focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-sm"
            >
              <span className="border-b border-transparent group-hover:border-gray-900 dark:group-hover:border-white transition-all duration-500">
                See Skills
              </span>
              <Code className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
            </button>

            {/* 블로그 링크 */}
            {aboutMeData.blogLink && (
              <a
                href={aboutMeData.blogLink}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                aria-label="블로그 방문 (새 창 열림)"
                className="group flex items-center gap-4 text-lg md:text-xl tracking-widest uppercase cursor-none text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-500 w-max focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-sm"
              >
                <span className="border-b border-transparent group-hover:border-gray-900 dark:group-hover:border-white transition-all duration-500">
                  Blog
                </span>
                <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Image & Achievements */}
        <div className="w-full md:flex-1 flex flex-col justify-center items-center md:items-end mt-12 md:mt-0">
          <ProfileImageCard
            profileImg={aboutMeData.profileImg}
            setIsHovering={setIsHovering}
          />
          <AchievementsList achievements={aboutMeData.achievements} />
        </div>
      </div>
    </div>
  )
}
