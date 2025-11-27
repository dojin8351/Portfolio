import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Project } from "@/types/project"
import ProjectCardPreview from "./ProjectCardPreview"
import dynamic from "next/dynamic"

const ProjectDetailDialog = dynamic(() => import("./ProjectDetailDialog"))

interface ProjectCardProps {
  projectInfo: Project
}

export default function ProjectCard({ projectInfo }: ProjectCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ProjectCardPreview
          title={projectInfo.title}
          period={projectInfo.period}
          description={projectInfo.description}
          techLogos={projectInfo.techLogos}
        />
      </DialogTrigger>
      <ProjectDetailDialog projectInfo={projectInfo} />
    </Dialog>
  )
}
