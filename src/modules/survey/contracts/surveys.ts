
export interface Survey {
  question: string,
  subTitle?: string,
  variants: SurveyVariant[]
}


export interface SurveyVariant {
  title: string,
  value: string
}