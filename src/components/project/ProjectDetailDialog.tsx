import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Project } from "@/types/project"
import LogoIcon from "@/components/ui/LogoIcon"
import ProjectImageCarousel from "./ProjectImageCarousel"
import React from "react"
import ProjectDescriptionAccordion from "@/components/project/ProjectDescriptionAccordion"
import ProjectDetailField from "./ProjectDetailField"
import ProjectMetaGrid from "./ProjectMetaGrid"

interface ProjectDetailDialogProps {
  projectInfo: Project
}

function ProjectDetailDialog({ projectInfo }: ProjectDetailDialogProps) {
  return (
    <DialogContent
      className="custom-scrollbar h-[85vh] !w-[80vw] !max-w-[80vw] overflow-y-auto dark:bg-gray-800 dark:text-white"
      showCloseButton={false}
    >
      <DialogHeader className="mb-4 flex flex-row items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700">
        <DialogTitle className="text-xl font-semibold">
          {projectInfo.title}
        </DialogTitle>
        <DialogClose className="ring-offset-background focus:ring-ring rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogHeader>
      <ProjectImageCarousel images={projectInfo.projectImage} />
      <ProjectDetailField label="프로젝트 설명">
        {projectInfo.description}
      </ProjectDetailField>
      <ProjectDetailField label="기술 스택">
        <div className="flex flex-row gap-1">
          {projectInfo.techLogos.map((logo) => (
            <LogoIcon
              src={logo.src}
              alt={logo.alt}
              key={logo.src}
              size={35}
              wrapperSize={50}
              blur={false}
              className="rounded-sm px-1 py-1"
            />
          ))}
        </div>
      </ProjectDetailField>
      <ProjectMetaGrid
        items={[
          { label: "참여인원", value: projectInfo.team },
          { label: "기간", value: projectInfo.period },
          { label: "역할", value: projectInfo.role },
        ]}
        githubLink={projectInfo.githubLink}
      />
      <hr />
      <ProjectDetailField label="상세 내용">
        <ProjectDescriptionAccordion
          projectDescription={projectInfo.projectDescription}
        />
      </ProjectDetailField>
      <DialogFooter className="sm:justify-end">
        <DialogClose asChild>
          <Button
            type="button"
            variant="secondary"
            className="cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            닫기
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  )
}

export default React.memo(ProjectDetailDialog)
