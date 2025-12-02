import AboutMeSection from "@/components/layouts/AboutMeSection"
import aboutMeData from "@/data/aboutMe.json"
import dynamic from "next/dynamic"
import { AboutMeType } from "@/types/aboutMe"

const CompetencySection = dynamic(
  () => import("@/components/layouts/CompetencySection")
)
const SkillSection = dynamic(
  () => import("@/components/layouts/SkillSection")
)
const ProjectSection = dynamic(
  () => import("@/components/layouts/ProjectSection")
)
const FloatingNavigation = dynamic(
  () => import("@/components/layouts/FloatingNavigation")
)
const Toaster = dynamic(
  () => import("@/components/ui/sonner").then((mod) => ({ default: mod.Toaster }))
)

const aboutMeInfo: AboutMeType = {
  name: aboutMeData.name,
  profileImg: aboutMeData.profileImg,
  job: aboutMeData.job,
  email: aboutMeData.email,
  githubLink: aboutMeData.githubLink,
  introductions: aboutMeData.introductions,
  achievements: aboutMeData.achievements as AboutMeType["achievements"],
}

export default function Home() {
  return (
    <div className="dark:bg-dark flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans">
      {/*<Header />*/}
      <FloatingNavigation />
      <main className="dark:bg-dark flex min-h-screen w-full max-w-[1100px] flex-col items-center bg-[#FAFAF9] sm:items-start">
        <AboutMeSection aboutMeInfo={aboutMeInfo} />
        <CompetencySection />
        <SkillSection />
        <ProjectSection />
      </main>
      <Toaster />
    </div>
  )
}
