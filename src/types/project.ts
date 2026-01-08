import { ImgType } from "@/types/competency"

export interface Project {
  id: number
  title: string
  description: string
  team: string
  role: string
  period: string
  representativeImg?: ImgType
  projectImage: ImgType[]
  projectDescription: ProjectDescription[]
  techLogos: ImgType[]
  githubLink: string
  liveDemoLink?: string
}

export interface ProjectData {
  project: Project[]
}

export interface ProjectDescription {
  id: number
  title: string
  content: string
}
