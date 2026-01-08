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
    <header className="fixed top-0 left-0 z-40 flex w-full items-center justify-between p-8 mix-blend-difference md:p-12">
      <div
        onClick={onBackToIntro}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="cursor-none text-xl font-bold tracking-tighter text-gray-200 dark:text-[#f0f0f0]"
      >
        {englishName} &copy;
      </div>
      <div className="flex gap-6 text-sm font-medium tracking-widest uppercase">
        <button
          onClick={onEnterProjects}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`cursor-none transition-opacity hover:opacity-50 ${
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
          className={`cursor-none transition-opacity hover:opacity-50 ${
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
          className="cursor-none text-gray-500 transition-opacity hover:opacity-50 dark:text-gray-500"
        >
          Contact
        </a>
      </div>
    </header>
  )
}
