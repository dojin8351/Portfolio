'use client'

import { Project } from '@/types/project'
import ProjectCardPreview from './ProjectCardPreview'
import ProjectDetailDialog from './ProjectDetailDialog'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

interface ProjectCardLegacyProps {
  projectInfo: Project
}

export default function ProjectCardLegacy({
  projectInfo,
}: ProjectCardLegacyProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <ProjectCardPreview
            title={projectInfo.title}
            period={projectInfo.period}
            description={projectInfo.description}
            techLogos={projectInfo.techLogos}
          />
        </div>
      </DialogTrigger>
      <ProjectDetailDialog projectInfo={projectInfo} />
    </Dialog>
  )
}
