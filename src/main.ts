/*
 * @Author: 
 * @Date: 2021-12-01 11:13:06
 * @LastEditTime: 2021-12-14 14:49:56
 * @FilePath: \vite-ts\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from './store'
import router from "./router/index"
createApp(App).use(router).use(store, key).mount('#app')
