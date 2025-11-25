import Header from "@/components/layouts/Header";
import AboutMeSection from "@/components/layouts/AboutMeSection";
import aboutMeData from "@/data/aboutMe.json";
import CompetencySection from "@/components/layouts/CompetencySection";
import SkillSection from "@/components/layouts/SkillSection";

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
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-dark">
      <Header/>
      <main className="flex min-h-screen w-full px-4 sm:px-8 md:px-16 lg:px-32 my-8 flex-col items-center bg-[#FAFAF9] dark:bg-dark sm:items-start">
        <AboutMeSection aboutMeInfo={aboutMeInfo} />
        <CompetencySection />
        <SkillSection />
      </main>
    </div>
  );
}
