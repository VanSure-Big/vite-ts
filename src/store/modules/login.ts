/*
 * @Author: 
 * @Date: 2021-12-03 10:50:41
 * @LastEditTime: 2021-12-14 11:15:33
 * @FilePath: \vite-ts\src\store\modules\login.ts
 */

import { Module } from "vuex";
import type { RootStateTypes } from "../index";

// import LoginStateType from "./interface"
export interface LoginStateType {
  username: string,
  password: string,
  counter: number,
}
export default {
  state: {
    username: "账号",
    password: "密码", counter: 1
  }
} as Module<LoginStateType, RootStateTypes>
