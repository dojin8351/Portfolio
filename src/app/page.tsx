'use client'

import { useState } from 'react'
import aboutMeData from '@/data/aboutMe.json'
import projectData from '@/data/project.json'
import skillsData from '@/data/skills.json'
import { AboutMeType } from '@/types/aboutMe'
import { Project } from '@/types/project'
import { SkillType } from '@/types/competency'
import CustomCursor from '@/components/ui/CustomCursor'
import AristideHeader from '@/components/layouts/AristideHeader'
import AristideThemeToggle from '@/components/ui/AristideThemeToggle'
import IntroView from '@/components/intro/IntroView'
import ProjectListView from '@/components/project/ProjectListView'
import ProjectDetailView from '@/components/project/ProjectDetailView'
import SkillsView from '@/components/skills/SkillsView'

type ViewType = 'intro' | 'list' | 'detail' | 'skills'

export default function Home() {
  const [view, setView] = useState<ViewType>('intro')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isDraggableArea, setIsDraggableArea] = useState(false)

  const aboutMeInfo: AboutMeType = {
    name: aboutMeData.name,
    profileImg: aboutMeData.profileImg,
    job: aboutMeData.job,
    email: aboutMeData.email,
    githubLink: aboutMeData.githubLink,
    blogLink: 'blogLink' in aboutMeData ? (aboutMeData as AboutMeType & { blogLink?: string }).blogLink : undefined,
    techUSP: 'techUSP' in aboutMeData ? (aboutMeData as AboutMeType & { techUSP?: string }).techUSP : undefined,
    introductions: aboutMeData.introductions,
    achievements: aboutMeData.achievements as AboutMeType['achievements'],
  }

  const projects: Project[] = projectData.project as Project[]
  const skills: SkillType[] = skillsData.skills as SkillType[]

  // 영어 이름 생성 (한글 이름의 영문 변환 또는 기본값)
  const englishName = 'KIM DOHYUN'

  // 뷰 전환 핸들러
  const handleEnterProjects = () => setView('list')
  const handleEnterSkills = () => setView('skills')
  const handleBackToIntro = () => setView('intro')

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setView('detail')
  }

  const handleBackToList = () => {
    setView('list')
    setTimeout(() => setSelectedProject(null), 500)
  }

  const handleNextProject = (project: Project) => {
    setSelectedProject(project)
  }

  return (
    <div className={`relative w-full h-screen bg-[#FAFAF9] dark:bg-[#111] text-gray-900 dark:text-[#f0f0f0] overflow-hidden font-sans selection:bg-blue-200 dark:selection:bg-white selection:text-black dark:selection:text-black transition-colors duration-500 ${isDraggableArea ? 'cursor-grab' : 'cursor-none'}`}>
      <CustomCursor isHovering={isHovering} hideCursor={isDraggableArea} />
      <AristideThemeToggle />

      <AristideHeader
        englishName={englishName}
        email={aboutMeInfo.email}
        currentView={view}
        onEnterProjects={handleEnterProjects}
        onEnterSkills={handleEnterSkills}
        onBackToIntro={handleBackToIntro}
        setIsHovering={setIsHovering}
      />

      <IntroView
        aboutMeData={aboutMeInfo}
        onEnterProjects={handleEnterProjects}
        onEnterSkills={handleEnterSkills}
        setIsHovering={setIsHovering}
        isVisible={view === 'intro'}
      />

      <ProjectListView
        projects={projects}
        onProjectClick={handleProjectClick}
        setIsHovering={setIsHovering}
        setIsDraggableArea={setIsDraggableArea}
        isVisible={view === 'list'}
      />

      <ProjectDetailView
        project={selectedProject}
        projects={projects}
        onBackToList={handleBackToList}
        onNextProject={handleNextProject}
        setIsHovering={setIsHovering}
        isVisible={view === 'detail'}
      />

      <SkillsView
        skills={skills}
        onBackToIntro={handleBackToIntro}
        setIsHovering={setIsHovering}
        isVisible={view === 'skills'}
      />
    </div>
  )
}
