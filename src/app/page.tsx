import Header from "@/components/layouts/Header";
import AboutMeSection from "@/components/layouts/AboutMeSection";
import aboutMeData from "@/data/aboutMe.json";
import CompetencySection from "@/components/layouts/CompetencySection";
import SkillSection from "@/components/layouts/SkillSection";
import {Toaster} from "sonner";

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
      <main className="flex flex-col min-h-screen w-full max-w-[1100px] px-4  my-8  items-center bg-[#FAFAF9]
              sm:px-6 sm:items-start
              md:px-8
              lg:px-16
              dark:bg-dark">
        <AboutMeSection aboutMeInfo={aboutMeInfo} />
        <CompetencySection />
        <SkillSection />
      </main>
      <Toaster />
    </div>
  );
}
