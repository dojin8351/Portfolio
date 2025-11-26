import Header from "@/components/layouts/Header";
import AboutMeSection from "@/components/layouts/AboutMeSection";
import aboutMeData from "@/data/aboutMe.json";
import CompetencySection from "@/components/layouts/CompetencySection";
import SkillSection from "@/components/layouts/SkillSection";
import {Toaster} from "sonner";
import ProjectSection from "@/components/layouts/ProjectSection";

export default function Home() {
  const aboutMeInfo = {
    name: aboutMeData.name,
    src: aboutMeData.profileImg,
    job: aboutMeData.job,
    email: aboutMeData.email,
    githubLink: aboutMeData.githubLink,
    introductions: aboutMeData.introductions,
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans
          dark:bg-dark">
      <Header/>
      <main className="flex flex-col min-h-screen w-full my-8 max-w-[1100px] px-4 items-center bg-[#FAFAF9]
              sm:px-6 sm:items-start
              md:px-8
              lg:px-16
              dark:bg-dark">
        <AboutMeSection aboutMeInfo={aboutMeInfo} />
        <CompetencySection />
        <SkillSection />
        <ProjectSection />
      </main>
      <Toaster />
    </div>
  );
}
