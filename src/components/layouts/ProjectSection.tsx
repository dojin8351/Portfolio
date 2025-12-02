import SectionLayout from "@/components/layouts/SectionLayout"
import ProjectCard from "@/components/project/ProjectCard"
import projectData from "@/data/project.json"
import { ProjectData } from "@/types/project"
import dynamic from "next/dynamic"

const FadeInSection = dynamic(
  () => import("@/components/layouts/FadeInSection")
)

export default function ProjectSection() {
  const data = projectData as ProjectData

  return (
    <FadeInSection>
      <SectionLayout
        title={"프로젝트"}
        sectionId="projects"
        className="pb-20 sm:pb-32"
      >
        <div className={"mt-5 flex flex-col gap-7"}>
          {data.project.map((project, id) => (
            <ProjectCard key={id} projectInfo={project} />
          ))}
        </div>
      </SectionLayout>
    </FadeInSection>
  )
}
