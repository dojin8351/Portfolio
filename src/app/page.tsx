import Header from "@/components/layouts/Header"
import AboutMeSection from "@/components/layouts/AboutMeSection"
import aboutMeData from "@/data/aboutMe.json"
import CompetencySection from "@/components/layouts/CompetencySection"
import SkillSection from "@/components/layouts/SkillSection"
import { Toaster } from "@/components/ui/sonner"
import ProjectSection from "@/components/layouts/ProjectSection"
import dynamic from "next/dynamic"
import SkillTabs from "@/components/skill/SkillTabs"

const FloatingNavigation = dynamic(
  () => import("@/components/layouts/FloatingNavigation")
)

const aboutMeInfo = {
  name: aboutMeData.name,
  src: aboutMeData.profileImg,
  job: aboutMeData.job,
  email: aboutMeData.email,
  githubLink: aboutMeData.githubLink,
  introductions: aboutMeData.introductions,
}

export default function Home() {
  return (
    <div className="dark:bg-dark flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans">
      {/*<Header />*/}
      <FloatingNavigation />
      <main className="dark:bg-dark flex min-h-screen w-full max-w-[1100px] flex-col items-center bg-[#FAFAF9] px-4 sm:items-start sm:px-6 md:px-8 lg:px-16">
        <AboutMeSection aboutMeInfo={aboutMeInfo} />
        <CompetencySection />
        <SkillSection />
        <ProjectSection />
      </main>
      <Toaster />
    </div>
  )
}
