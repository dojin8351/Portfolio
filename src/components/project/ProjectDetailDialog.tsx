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
import GitHubIcon from "@/components/ui/GitHubIcon"
import ProjectImageCarousel from "./ProjectImageCarousel"

interface ProjectDetailDialogProps {
  projectInfo: Project
}

export default function ProjectDetailDialog({
  projectInfo,
}: ProjectDetailDialogProps) {
  return (
    <DialogContent className="custom-scrollbar h-[85vh] !w-[80vw] !max-w-[80vw] overflow-y-auto dark:bg-gray-800 dark:text-white">
      <DialogHeader>
        <DialogTitle>{projectInfo.title}</DialogTitle>
      </DialogHeader>
      <ProjectImageCarousel images={projectInfo.projectImage} />
      <div>
        <p className="mb-2 text-gray-400 dark:text-gray-500">프로젝트 설명</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {projectInfo.description}
        </p>
      </div>
      <div>
        <p className="mb-2 text-gray-400 dark:text-gray-500">기술 스택</p>
        <div className="flex flex-row gap-1">
          {projectInfo.techLogos.map((logo, index) => (
            <LogoIcon
              src={logo.src}
              alt={logo.alt}
              key={index}
              size={15}
              wrapperSize={30}
              className="rounded-sm px-1 py-1"
            />
          ))}
        </div>
      </div>
      <div className="mt-2 mb-2 flex flex-row gap-8">
        <div>
          <p className="mb-1 text-gray-400 dark:text-gray-500">참여인원</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {projectInfo.team}
          </p>
        </div>
        <div>
          <p className="mb-1 text-gray-400 dark:text-gray-500">기간</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {projectInfo.period}
          </p>
        </div>
        <div>
          <p className="mb-1 text-gray-400 dark:text-gray-500">관련 링크</p>
          <a
            href={projectInfo.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={
              "flex cursor-pointer flex-row items-center gap-1 rounded-full bg-black px-2 py-1 text-xs text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-black"
            }
          >
            <GitHubIcon className="h-4 w-4 text-white dark:text-black" />
            <p>github</p>
          </a>
        </div>
        <div>
          <p className="mb-1 text-gray-400 dark:text-gray-500">역할</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {projectInfo.role}
          </p>
        </div>
      </div>
      <hr />
      <div className="flex flex-col">
        <p className="mb-2 text-gray-400 dark:text-gray-500">상세 내용</p>
        <ul className="list-disc px-4">
          {projectInfo.projectDescription.map((desc, index) => (
            <li
              key={index}
              className="mb-5 text-sm text-gray-700 dark:text-gray-300"
            >
              {desc.content}
            </li>
          ))}
        </ul>
      </div>
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
