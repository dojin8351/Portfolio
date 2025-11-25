import {SkillData} from "@/types/competency";
import skillsData from "@/data/skills.json";
import SkillsCard from "@/components/SkillsCard";

export default function SkillSection() {
  const data = skillsData as SkillData;
  return (
    <div className={'mt-10 w-full self-stretch'}>
      <div className={'border-b dark:border-white'}>
        <p className={'text-h3 font-semibold my-2 dark:text-white'}>기술</p>
      </div>
      <div className={'flex flex-col justify-center sm:flex-row gap-6 sm:gap-10 mt-3 w-full'}>
        {data.skills.map((skill, index) => (
          <div key={index} className="w-full sm:w-auto flex-shrink-0">
            <SkillsCard
              logos={skill.logos}
              title={skill.title}
            />
          </div>
        ))}
      </div>
    </div>
  )
}