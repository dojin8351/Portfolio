import {SkillData} from "@/types/competency";
import skillsData from "@/data/skills.json";
import SkillsCard from "@/components/ui/SkillsCard";

export default function SkillSection() {
  const data = skillsData as SkillData;
  return (
    <div className={'mt-10 w-full self-stretch'}>
      <div className="border-b
              dark:border-white">
        <p className="text-h3 font-semibold my-2
            dark:text-white">기술</p>
      </div>
      <div className="flex flex-col justify-center gap-2 mt-3 w-full
              sm:flex-row sm:flex-wrap sm:gap-6
              md:gap-10 ">
        {data.skills.map((skill, index) => (
          <div key={index} className="w-full flex-shrink-0
                                sm:w-[calc(50%-0.75rem)]
                                md:w-auto">
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