import { IServiceLocator } from './contracts'

export class ServiceLocator implements IServiceLocator {
  private _registry = new Map<symbol, unknown>()

  get<T> (sym: symbol): T {
    const _class = this._registry.get(sym)

    // @ts-expect-error
    return new _class() as unknown as T
  }

  register (sym: symbol, instance: {}): ServiceLocator {
    if (this._registry.has(sym)) {
      throw new Error('Given service is already registered')
    }

    this._registry.set(sym, instance)
    return this
  }
}

export const serviceLocator = new ServiceLocator