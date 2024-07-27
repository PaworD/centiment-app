import { Survey } from '../../../contracts'

export interface SurveyRendererProps {
  surveys: Survey[]
}

export const surveyRendererProps = {
  surveys: {
    type: Array,
    required: false
  }
}