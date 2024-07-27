import { IServiceLocator } from './contracts'

export class ServiceLocator implements IServiceLocator {
  private _registry = new Map<symbol, unknown>()

  get<T> (symbol: Symbol): T {
    const _class = this._registry.get(symbol)

    return new _class() as T
  }

  register <T> (symbol: Symbol, instance: {}): ServiceLocator {
    if (this._registry.has(symbol)) {
      throw new Error('Given service is already registered')
    }

    this._registry.set(symbol, instance)
    return this
  }
}

export const serviceLocator = new ServiceLocator