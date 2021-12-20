/*
 * @Author: 
 * @Date: 2021-12-01 11:13:06
 * @LastEditTime: 2021-12-14 14:32:10
 * @FilePath: \vite-ts\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中
require('dotenv').config()
console.log(process.env);

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: false
  },
  define: {

  },
  optimizeDeps: {
    exclude: ['vuex']
  },
  plugins: [vue(),]
})
