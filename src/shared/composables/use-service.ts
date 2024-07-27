import { serviceLocator } from '@/shared/services/service-locator'

export const useService = <T>(symbol: Symbol): T => {
  return serviceLocator.get<T>(symbol)
}