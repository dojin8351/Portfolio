import { SkillData } from "@/types/competency"
import skillsData from "@/data/skills.json"
import SkillsCard from "@/components/skill/SkillsCard"
import SectionLayout from "@/components/layouts/SectionLayout"

export default function SkillSection() {
  const data = skillsData as SkillData
  return (
    <SectionLayout title={"기술"} sectionId="skills">
      <div className="mt-3 flex w-full flex-col justify-center gap-2 sm:flex-row sm:flex-wrap sm:gap-6 md:gap-10">
        {data.skills.map((skill, index) => (
          <div
            key={index}
            className="mt-5 w-full flex-shrink-0 sm:w-[calc(50%-0.75rem)] md:w-auto"
          >
            <SkillsCard logos={skill.logos} title={skill.title} />
          </div>
        ))}
      </div>
    </SectionLayout>
  )
}
