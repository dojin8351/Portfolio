import CompetencyCard from "@/components/competency/CompetencyCard"
import competencyData from "@/data/competency.json"
import { CompetencyData } from "@/types/competency"
import SectionLayout from "@/components/layouts/SectionLayout"
import dynamic from "next/dynamic"

const FadeInSection = dynamic(() => import("@/components/layouts/FadeInSection"))

export default function CompetencySection() {
  const data = competencyData as CompetencyData

  return (
    <FadeInSection>
      <SectionLayout title={"역량"} sectionId="competency">
        <div className={"mt-5 flex w-full flex-col gap-10"}>
          {data.competencies.map((competency) => (
            <CompetencyCard
              key={competency.title}
              title={competency.title}
              description={competency.description}
            />
          ))}
        </div>
      </SectionLayout>
    </FadeInSection>
  )
}
