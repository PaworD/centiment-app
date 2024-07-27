import { IModule } from '@/boostrap/abstract'
import { serviceLocator } from '@/shared/services/service-locator'

import { SurveysRepository } from './repositories/surveys.repository'
import { SurveysRepositorySymbol } from './contracts'
import { routes } from './config/routes'

/**
 * @author Javlon Khalimjonov <khalimjanov2000@gmail.com>
 */
export const SurveyModule: IModule = {
  name: 'survey',
  load: () => {
    serviceLocator
      .register(SurveysRepositorySymbol, SurveysRepository)
  },
  routes
}