"use client"

interface AristideHeaderProps {
  englishName: string
  email: string
  currentView: "intro" | "list" | "detail" | "skills"
  onEnterProjects: () => void
  onEnterSkills: () => void
  onBackToIntro: () => void
  setIsHovering: (hovering: boolean) => void
}

export default function AristideHeader({
  englishName,
  email,
  currentView,
  onEnterProjects,
  onEnterSkills,
  onBackToIntro,
  setIsHovering,
}: AristideHeaderProps) {
  return (
    <header className="fixed top-0 left-0 z-40 flex w-full items-center justify-between p-4 mix-blend-difference md:p-8 lg:p-12">
      <button
        onClick={onBackToIntro}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            onBackToIntro()
          }
        }}
        aria-label="홈으로 이동"
        className="min-h-11 min-w-11 touch-manipulation rounded-sm text-base font-bold tracking-tighter text-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none md:cursor-none md:text-xl dark:text-[#f0f0f0] dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
      >
        {englishName} &copy;
      </button>
      <nav
        className="flex gap-3 text-xs font-medium tracking-widest uppercase md:gap-6 md:text-sm"
        aria-label="메인 네비게이션"
      >
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
          aria-current={
            currentView === "list" || currentView === "detail"
              ? "page"
              : undefined
          }
          className={`min-h-11 touch-manipulation rounded-sm px-2 transition-opacity hover:opacity-50 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none active:opacity-50 md:cursor-none dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900 ${
            currentView === "list" || currentView === "detail"
              ? "font-bold text-gray-100 dark:text-white"
              : "text-gray-500 dark:text-gray-500"
          }`}
        >
          Projects
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
          aria-current={currentView === "skills" ? "page" : undefined}
          className={`min-h-11 touch-manipulation rounded-sm px-2 transition-opacity hover:opacity-50 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none active:opacity-50 md:cursor-none dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900 ${
            currentView === "skills"
              ? "font-bold text-gray-100 dark:text-white"
              : "text-gray-500 dark:text-gray-500"
          }`}
        >
          Skills
        </button>
        <a
          href={`mailto:${email}`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          aria-label={`이메일 보내기: ${email}`}
          className="flex min-h-11 touch-manipulation items-center rounded-sm px-2 text-gray-500 transition-opacity hover:opacity-50 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none active:opacity-50 md:cursor-none dark:text-gray-500 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}
