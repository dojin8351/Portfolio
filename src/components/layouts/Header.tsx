"use client";

import ThemeToggleButton from "@/components/ui/ThemeToggleButton";
import { useScrollToSection } from "@/hooks/useScrollToSection";

export default function Header() {
  const { scrollToSection } = useScrollToSection();

  return (
    <div
      className='w-full bg-white/80 dark:bg-gray-900/80
                    border-b border-gray-200/50 dark:border-gray-700/50
                    shadow-sm
                    transition-all duration-300'
    >
      <div
        className='flex flex-row w-full max-w-[1100px] mx-auto h-14 justify-between items-center px-3
                      sm:h-16 sm:px-4
                      md:px-5'
      >
        <p
          className='text-lg sm:text-h3 font-semibold antialiased dark:text-white cursor-pointer'
          onClick={() => scrollToSection(null)}
        >
          Portfolio
        </p>
        <div className='flex flex-row gap-2 sm:gap-5 justify-between items-center'>
          <div className='hidden sm:flex flex-row gap-3 sm:gap-5 font-medium dark:text-white'>
            <p
              className='cursor-pointer hover:text-blue-500 text-sm sm:text-base transition-colors'
              onClick={() => scrollToSection(null)}
            >
              자기소개
            </p>
            <p
              className='cursor-pointer hover:text-blue-500 text-sm sm:text-base transition-colors'
              onClick={() => scrollToSection("competency")}
            >
              역량
            </p>
            <p
              className='cursor-pointer hover:text-blue-500 text-sm sm:text-base transition-colors'
              onClick={() => scrollToSection("skills")}
            >
              기술
            </p>
            <p
              className='cursor-pointer hover:text-blue-500 text-sm sm:text-base transition-colors'
              onClick={() => scrollToSection("projects")}
            >
              프로젝트
            </p>
          </div>
          <div>
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </div>
  );
}
