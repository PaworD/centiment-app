import { serviceLocator } from '@/shared/services/service-locator'

export const useService = <T>(symbol: symbol): T => {
  return serviceLocator.get<T>(symbol)
}