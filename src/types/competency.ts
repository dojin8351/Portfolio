export interface ImgType {
  src: string;
  alt: string;
}

export interface CompetencyType {
  title: string;
  description: string;
  logos: ImgType[];
}

export interface CompetencyData {
  competencies: CompetencyType[];
}

export interface SkillType {
  title : string
  logos : ImgType[]
}

export interface SkillData {
  skills : SkillType[]
}

