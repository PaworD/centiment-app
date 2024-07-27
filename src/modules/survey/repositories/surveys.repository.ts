import { ISurveysRepository, Survey } from '@/modules/survey/contracts'

export class SurveysRepository implements ISurveysRepository {
  public async fetchSurveys (): Promise<Survey[]> {
    return [
      {
        question: 'Which of the following are most important when selecting a job?',
        subTitle: 'Rank your top three items',
        variants: [
          {
            title: 'Salary and benefits',
            value: 'salary-and-benefits'
          },
          {
            title: 'Work-life balance',
            value: 'work-life-balance'
          },
          {
            title: 'Career advancement opportunities',
            value: 'career-opportunities'
          },
          {
            title: 'Company culture',
            value: 'company-culture'
          },
          {
            title: 'Job location',
            value: 'job-location'
          },
        ]
      }
    ] as Survey[]
  }
}