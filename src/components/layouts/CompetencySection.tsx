import CompetencyCard from "@/components/competency/CompetencyCard"
import competencyData from "@/data/competency.json"
import { CompetencyData } from "@/types/competency"
import SectionLayout from "@/components/layouts/SectionLayout"

export default function CompetencySection() {
  const data = competencyData as CompetencyData

  return (
    <SectionLayout title={"역량"} sectionId="competency">
      <div className={"mt-10 flex w-full flex-col gap-10"}>
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
