import { RouteRecordRaw } from 'vue-router'

export interface IModule {
  name: string
  routes: RouteRecordRaw[]
  load (): void
}