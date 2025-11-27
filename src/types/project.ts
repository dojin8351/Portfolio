import { ImgType } from "@/types/competency"

export interface Project {
  id: number
  title: string
  description: string
  team: string
  role: string
  period: string
  projectImage: ImgType[]
  projectDescription: { id: number; title: string; content: string }[]
  techLogos: ImgType[]
  githubLink: string
}

export interface ProjectData {
  project: Project[]
}
