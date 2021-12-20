import http from "./request";


/*
 * @Author: 
 * @Date: 2021-12-14 17:24:12
 * @LastEditTime: 2021-12-14 17:27:35
 * @FilePath: \vite-ts\src\api\index.ts
 */
export function getTodo() {
 return http.get('/todos/1')
}