import SectionLayout from "@/components/layouts/SectionLayout"
import FadeInSection from "@/components/layouts/FadeInSection"
import SkillTabs from "@/components/skill/SkillTabs"
import skillData from "@/data/skills.json"
import { SkillData } from "@/types/competency"

export default function SkillSection() {
  const data = skillData as SkillData
  return (
    <FadeInSection>
      <SectionLayout title={"기술"} sectionId="skills">
        <SkillTabs imgs={data.skills}></SkillTabs>
      </SectionLayout>
    </FadeInSection>
  )
}
