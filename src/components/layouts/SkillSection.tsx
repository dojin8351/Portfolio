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
        <p className="text-muted-foreground my-2 flex justify-end text-sm">
          기술 아이콘 위에 마우스를 올려 자세한 내용을 확인해보세요.
        </p>
        <SkillTabs skillInfo={data.skills}></SkillTabs>
      </SectionLayout>
    </FadeInSection>
  )
}
