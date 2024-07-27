import { Survey } from './surveys'

export const SurveysRepositorySymbol = Symbol('ISurveysRepository')
export interface ISurveysRepository {
  fetchSurveys(): Promise<Survey[]>
}