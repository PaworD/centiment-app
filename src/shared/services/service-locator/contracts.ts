export interface IServiceLocator {
  get<T>(symbol: Symbol): T
  register <T> (symbol: Symbol, instance: {}): void
}