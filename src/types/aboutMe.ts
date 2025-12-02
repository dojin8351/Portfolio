export interface Achievement {
  type: "certification" | "education" | "award"
  title: string
  organization?: string
  date?: string
  description?: string
}

export interface AboutMeType {
  name: string
  profileImg: string
  job: string
  githubLink: string
  email: string
  introductions: string[]
  achievements: Achievement[]
}
