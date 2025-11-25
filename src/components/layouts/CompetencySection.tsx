import CompetencyCard from "@/components/CompetencyCard";
import competencyData from "@/data/competency.json";
import { CompetencyData } from "@/types/competency";

export default function CompetencySection() {
  const data = competencyData as CompetencyData;

  return (
    <div className={'mt-10 w-full self-stretch'}>
      <div className={'border-b dark:border-white'}>
        <p className={'text-h3 font-semibold my-2 dark:text-white'}>역량</p>
      </div>
      <div className={'flex flex-col gap-10 mt-10 w-full'}>
        {data.competencies.map((competency, index) => (
          <CompetencyCard
            key={index}
            logos={competency.logos}
            title={competency.title}
            description={competency.description}
          />
        ))}
      </div>
    </div>
  )
}