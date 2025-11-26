import CompetencyCard from "@/components/ui/CompetencyCard";
import competencyData from "@/data/competency.json";
import { CompetencyData } from "@/types/competency";
import SectionLayout from "@/components/layouts/SectionLayout";

export default function CompetencySection() {
  const data = competencyData as CompetencyData;

  return (
   <SectionLayout title={'역량'} sectionId="competency">
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
   </SectionLayout>
  )
}