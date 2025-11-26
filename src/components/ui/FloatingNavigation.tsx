'use client'

import { useEffect, useState } from 'react';
import ThemeToggleButton from './ThemeToggleButton';

export default function FloatingNavigation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 
                    bg-white/80 dark:bg-gray-900/80 
                    backdrop-blur-lg
                    border-b border-gray-200/50 dark:border-gray-700/50
                    shadow-sm
                    transition-all duration-300">
      <div className="flex flex-row w-full max-w-[1100px] mx-auto 
                      h-14 sm:h-16 
                      justify-between items-center 
                      px-3 sm:px-4 md:px-5">
        <p 
          className="text-lg sm:text-h3 font-semibold antialiased dark:text-white cursor-pointer"
          onClick={() => scrollToSection('about-me')}
        >
          Portfolio
        </p>
        <div className="flex flex-row gap-2 sm:gap-5 justify-between items-center">
          <div className="flex flex-row gap-3 sm:gap-5 font-medium dark:text-white">
            <p 
              className="cursor-pointer hover:text-blue-500 text-sm sm:text-base transition-colors"
              onClick={() => scrollToSection('about-me')}
            >
              자기소개
            </p>
            <p 
              className="cursor-pointer hover:text-blue-500 text-sm sm:text-base transition-colors"
              onClick={() => scrollToSection('competency')}
            >
              역량
            </p>
            <p 
              className="cursor-pointer hover:text-blue-500 text-sm sm:text-base transition-colors"
              onClick={() => scrollToSection('skills')}
            >
              기술
            </p>
            <p 
              className="cursor-pointer hover:text-blue-500 text-sm sm:text-base transition-colors"
              onClick={() => scrollToSection('projects')}
            >
              프로젝트
            </p>
          </div>
          <div>
            <ThemeToggleButton/>
          </div>
        </div>
      </div>
    </div>
  );
}

