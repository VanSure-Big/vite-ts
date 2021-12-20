/*
 * @Author: 
 * @Date: 2021-12-01 16:49:35
 * @LastEditTime: 2021-12-14 14:21:12
 * @FilePath: \vite-ts\src\store\index.ts
 */

import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import loginModule from "./modules/login";
import type { LoginStateType } from "./modules/login";
/**声明类型定义 */
export interface RootStateTypes {
  loginModule?: LoginStateType
}
/**定义key，简化useStore */
export const key: InjectionKey<Store<RootStateTypes>> = Symbol()
// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key)
}


/**声明store */
export const store = createStore<RootStateTypes>({
  modules: {
    loginModule
  }
})
