"use client"

import { ArrowRight, Code, BookOpen } from "lucide-react"
import { AboutMeType } from "@/types/aboutMe"
import ProfileImageCard from "./ProfileImageCard"
import AchievementsList from "./AchievementsList"

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
      className={`view-transition absolute inset-0 flex items-start justify-center overflow-y-auto px-4 md:items-center md:px-8 lg:px-12 ${isVisible ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"} `}
    >
      <div className="flex w-full max-w-7xl flex-col gap-10 pt-[100px] pb-16 md:hidden">
        {/* 1. Profile Image (최상위) - 중앙 정렬 유지 */}
        <div className="animate-fade-in-up -mt-4 flex w-full justify-center">
          <ProfileImageCard
            profileImg={aboutMeData.profileImg}
            setIsHovering={setIsHovering}
          />
        </div>

        {/* 2. Description Section - 이름/직업은 중앙 정렬, 나머지는 왼쪽 정렬 */}
        <div className="z-10 flex w-full flex-col space-y-6">
          <div className="animate-fade-in-up space-y-2 text-center delay-100">
            <h2 className="text-sm tracking-[0.3em] text-gray-500 uppercase dark:text-gray-400">
              {aboutMeData.job}
            </h2>
            <h1 className="text-4xl leading-[1] font-light tracking-tight whitespace-nowrap sm:text-5xl">
              {aboutMeData.name}
              <span className="text-gray-400 dark:text-gray-600">.</span>
            </h1>
          </div>

          <div className="my-4 h-px w-full bg-gray-300 dark:bg-gray-700"></div>

          {/* 기술적 USP 강조 */}
          {aboutMeData.techUSP && (
            <div className="animate-fade-in-up mb-6 delay-200">
              <p className="text-lg leading-relaxed font-medium text-gray-900 italic dark:text-[#f0f0f0]">
                {aboutMeData.techUSP}
              </p>
            </div>
          )}

          <div className="space-y-4">
            {aboutMeData.introductions.map((text, idx) => (
              <p
                key={idx}
                className="animate-fade-in-up text-sm leading-relaxed text-gray-600 dark:text-gray-400"
                style={{ animationDelay: `${(idx + 3) * 0.1}s` }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* 3. Achievements (수상이력) - 화면 너비와 일치 */}
        <div className="animate-fade-in-up w-full delay-500">
          <AchievementsList achievements={aboutMeData.achievements} />
        </div>

        {/* 구분선 */}
        <div className="h-px w-full bg-gray-300 dark:bg-gray-800"></div>

        {/* 4. Links Section (링크) - 왼쪽 정렬 (수상이력과의 gap은 구분선과 pt-4로 유지) */}
        <div className="animate-fade-in-up flex flex-col gap-6 delay-700">
          <button
            onClick={onEnterProjects}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                onEnterProjects()
              }
            }}
            aria-label="프로젝트 보기"
            className="group flex min-h-[44px] w-max touch-manipulation items-center gap-3 rounded-sm text-base tracking-widest uppercase focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
          >
            <span className="border-b border-transparent transition-all duration-500 group-hover:border-gray-900 dark:group-hover:border-white">
              See Projects
            </span>
            <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" />
          </button>

          <button
            onClick={onEnterSkills}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                onEnterSkills()
              }
            }}
            aria-label="스킬 보기"
            className="group flex min-h-[44px] w-max touch-manipulation items-center gap-3 rounded-sm text-base tracking-widest text-gray-600 uppercase transition-colors duration-500 hover:text-gray-900 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none active:text-gray-900 dark:text-gray-500 dark:hover:text-white dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900 dark:active:text-white"
          >
            <span className="border-b border-transparent transition-all duration-500 group-hover:border-gray-900 dark:group-hover:border-white">
              See Skills
            </span>
            <Code className="h-5 w-5 transition-transform duration-500 group-hover:rotate-12" />
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
              className="group flex min-h-[44px] w-max touch-manipulation items-center gap-3 rounded-sm text-base tracking-widest text-gray-600 uppercase transition-colors duration-500 hover:text-gray-900 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none active:text-gray-900 dark:text-gray-500 dark:hover:text-white dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900 dark:active:text-white"
            >
              <span className="border-b border-transparent transition-all duration-500 group-hover:border-gray-900 dark:group-hover:border-white">
                Blog
              </span>
              <BookOpen className="h-5 w-5 transition-transform duration-500 group-hover:rotate-12" />
            </a>
          )}
        </div>
      </div>

      {/* 데스크톱: 기존 좌우 분할 레이아웃 */}
      <div className="hidden w-full max-w-7xl flex-row items-center justify-between gap-12 md:flex md:gap-16">
        {/* Left Column: Text Content */}
        <div className="z-10 flex w-full flex-col justify-center space-y-8 md:flex-1">
          <div className="animate-fade-in-up space-y-2">
            <h2 className="text-sm tracking-[0.3em] text-gray-500 uppercase md:text-base dark:text-gray-400">
              {aboutMeData.job}
            </h2>
            <h1 className="text-5xl leading-[1] font-light tracking-tight whitespace-nowrap md:text-7xl lg:text-8xl">
              {aboutMeData.name}
              <span className="text-gray-400 dark:text-gray-600">.</span>
            </h1>
          </div>

          <div className="my-4 h-px w-full bg-gray-300 dark:bg-gray-700"></div>

          {/* 기술적 USP 강조 */}
          {aboutMeData.techUSP && (
            <div className="animate-fade-in-up mb-6 delay-100">
              <p className="text-lg leading-relaxed font-medium text-gray-900 italic md:text-xl dark:text-[#f0f0f0]">
                {aboutMeData.techUSP}
              </p>
            </div>
          )}

          <div className="max-w-lg space-y-4">
            {aboutMeData.introductions.map((text, idx) => (
              <p
                key={idx}
                className="animate-fade-in-up text-sm leading-relaxed text-gray-600 md:text-base dark:text-gray-400"
                style={{ animationDelay: `${(idx + 2) * 0.1}s` }}
              >
                {text}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-8 pt-8 md:flex-row md:items-center">
            <button
              onClick={onEnterProjects}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  onEnterProjects()
                }
              }}
              aria-label="프로젝트 보기"
              className="group flex min-h-[44px] w-max items-center gap-4 rounded-sm text-lg tracking-widest uppercase focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none md:cursor-none md:text-xl dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
            >
              <span className="border-b border-transparent transition-all duration-500 group-hover:border-gray-900 dark:group-hover:border-white">
                See Projects
              </span>
              <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" />
            </button>

            <button
              onClick={onEnterSkills}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  onEnterSkills()
                }
              }}
              aria-label="스킬 보기"
              className="group flex min-h-[44px] w-max items-center gap-4 rounded-sm text-lg tracking-widest text-gray-600 uppercase transition-colors duration-500 hover:text-gray-900 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none md:cursor-none md:text-xl dark:text-gray-500 dark:hover:text-white dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
            >
              <span className="border-b border-transparent transition-all duration-500 group-hover:border-gray-900 dark:group-hover:border-white">
                See Skills
              </span>
              <Code className="h-5 w-5 transition-transform duration-500 group-hover:rotate-12" />
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
                className="group flex min-h-[44px] w-max items-center gap-4 rounded-sm text-lg tracking-widest text-gray-600 uppercase transition-colors duration-500 hover:text-gray-900 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none md:cursor-none md:text-xl dark:text-gray-500 dark:hover:text-white dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
              >
                <span className="border-b border-transparent transition-all duration-500 group-hover:border-gray-900 dark:group-hover:border-white">
                  Blog
                </span>
                <BookOpen className="h-5 w-5 transition-transform duration-500 group-hover:rotate-12" />
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Image & Achievements */}
        <div className="mt-12 flex w-full flex-col items-center justify-center md:mt-0 md:flex-1 md:items-end">
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
