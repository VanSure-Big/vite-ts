import Axios, { AxiosRequestConfig } from "axios";

/*
 * @Author: 
 * @Date: 2021-12-14 15:22:13
 * @LastEditTime: 2021-12-15 11:20:55
 * @FilePath: \vite-ts\src\api\request.ts
 */
// declare module "axios" {
//   export interface AxiosRequestConfig {
//   }
// }


const http = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  key: "string"
} as AxiosRequestConfig);



http.interceptors.request.use((req: any) => {
  req.headers['token'] = "111"
  return req
})

http.interceptors.response.use((res: any) => {
  if (res.status != 200) { alert('请求失败！'); return }
  return res.data
})


export default http