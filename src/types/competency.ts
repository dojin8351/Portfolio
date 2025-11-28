export interface ImgType {
  src: string
  alt: string
  status: string
}

export interface CompetencyType {
  title: string
  description: string
}

export interface CompetencyData {
  competencies: CompetencyType[]
}

export interface SkillType {
  src: string
  alt: string
  status: string
  proficiency: number
}

export interface SkillData {
  skills: SkillType[]
}
