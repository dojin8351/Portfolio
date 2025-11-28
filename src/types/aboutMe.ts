export interface Achievement {
  type: "certification" | "education" | "award"
  title: string
  organization?: string
  date: string
  description?: string
}

export interface AboutMeType {
  name: string
  src: string
  job: string
  email: string
  githubLink: string
  introductions: string[]
  achievements?: Achievement[]
}
