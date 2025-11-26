import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/project";
import LogoIcon from "@/components/ui/LogoIcon";
import GitHubIcon from "@/components/ui/GitHubIcon";
import ProjectImageCarousel from "./ProjectImageCarousel";

interface ProjectDetailDialogProps {
  projectInfo: Project;
}

export default function ProjectDetailDialog({ projectInfo }: ProjectDetailDialogProps) {
  return (
    <DialogContent className="h-[85vh] !w-[80vw] !max-w-[80vw] overflow-y-auto dark:text-white dark:bg-gray-800 custom-scrollbar">
      <DialogHeader>
        <DialogTitle>{projectInfo.title}</DialogTitle>
      </DialogHeader>
      <ProjectImageCarousel images={projectInfo.projectImage} />
      <div>
        <p className="text-gray-400 dark:text-gray-500 mb-2">프로젝트 설명</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">{projectInfo.description}</p>
      </div>
      <div>
        <p className="text-gray-400 dark:text-gray-500 mb-2">기술 스택</p>
        <div className="flex flex-row gap-1">
          {projectInfo.techLogos.map((logo, index) => (
            <LogoIcon
              src={logo.src}
              alt={logo.alt}
              key={index}
              size={15}
              wrapperSize={30}
              className="rounded-sm py-1 px-1"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row mt-2 mb-2 gap-8">
        <div>
          <p className="text-gray-400 dark:text-gray-500 mb-1">참여인원</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">{projectInfo.team}</p>
        </div>
        <div>
          <p className="text-gray-400 dark:text-gray-500 mb-1">기간</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">{projectInfo.period}</p>
        </div>
        <div>
          <p className="text-gray-400 dark:text-gray-500 mb-1">관련 링크</p>
          <a
            href={projectInfo.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={
              "cursor-pointer gap-1 flex flex-row items-center bg-black dark:bg-white text-white dark:text-black text-xs rounded-full px-2 py-1 hover:opacity-80 transition-opacity"
            }
          >
            <GitHubIcon className="w-4 h-4 text-white dark:text-black" />
            <p>github</p>
          </a>
        </div>
        <div>
          <p className="text-gray-400 dark:text-gray-500 mb-1">역할</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">{projectInfo.role}</p>
        </div>
      </div>
      <hr />
      <div className="flex flex-col">
        <p className="text-gray-400 dark:text-gray-500 mb-2">상세 내용</p>
        <ul className="list-disc px-4">
          {projectInfo.projectDescription.map((desc, index) => (
            <li key={index} className="mb-5 text-gray-700 dark:text-gray-300 text-sm">
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
  );
}

