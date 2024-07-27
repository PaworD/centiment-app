export interface IServiceLocator {
  get<T>(symbol: Symbol): T
  register (symbol: Symbol, instance: {}): void
}