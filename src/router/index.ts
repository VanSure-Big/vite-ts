import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

/*
 * @Author: 
 * @Date: 2021-12-14 14:33:00
 * @LastEditTime: 2021-12-15 11:21:06
 * @FilePath: \vite-ts\src\router\index.ts
 */
// export 

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    component: () => import('../views/Home.vue')
  }, {
    path: '/AddTodo',
    hidden: false,
    component: () => import('../views/AddTodo.vue')
  }] as RouteRecordRaw[]
})

router.beforeEach((to,from,next)=>{
  console.log('to',to);
  console.log('from',from);
  console.log('next',next);
  next()
})
export default router