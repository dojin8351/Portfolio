export interface ImgType {
  src: string
  alt: string
  status: string
}

export interface CompetencyType {
  title: string
  description: string
  logos: ImgType[]
}

export interface CompetencyData {
  competencies: CompetencyType[]
}

export interface SkillType {
  src: string
  alt: string
  status: string
}

export interface SkillData {
  skills: SkillType[]
}
