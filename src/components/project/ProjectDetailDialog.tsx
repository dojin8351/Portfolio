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
import dynamic from "next/dynamic"
import React from "react"
import ProjectDescriptionAccordion from "@/components/project/ProjectDescriptionAccordion"
import ProjectDetailField from "./ProjectDetailField"
import ProjectMetaGrid from "./ProjectMetaGrid"

const ProjectImageCarousel = dynamic(() => import("./ProjectImageCarousel"), {
  loading: () => (
    <div className="mt-5 h-64 w-full animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
  ),
})

interface ProjectDetailDialogProps {
  projectInfo: Project
}

function ProjectDetailDialog({ projectInfo }: ProjectDetailDialogProps) {
  return (
    <DialogContent
      className="custom-scrollbar h-[85vh] !w-[95vw] !max-w-[95vw] overflow-x-hidden overflow-y-auto dark:bg-gray-800 dark:text-white sm:!w-[80vw] sm:!max-w-[80vw]"
      showCloseButton={false}
    >
      <DialogHeader className="relative mb-4 border-b border-gray-200 pb-4 dark:border-gray-700">
        <DialogTitle className="text-base font-semibold leading-tight sm:text-lg md:text-xl pr-8">
          {projectInfo.title}
        </DialogTitle>
        <DialogClose className="absolute top-0 right-0 flex items-start pt-0.5 ring-offset-background focus:ring-ring rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 dark:text-gray-300 sm:h-6 sm:w-6"
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
        <div className="flex flex-row flex-wrap gap-1 overflow-x-hidden">
          {projectInfo.techLogos.map((logo) => (
            <LogoIcon
              src={logo.src}
              alt={logo.alt}
              key={logo.src}
              size={35}
              wrapperSize={50}
              blur={false}
              className="rounded-sm px-1 py-1 shrink-0"
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
