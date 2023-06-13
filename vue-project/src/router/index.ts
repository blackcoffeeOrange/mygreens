import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes:Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: '/list/:id',
    name: 'list',
    component: () => import('../views/List.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
];


// ルーターの生成
const router = createRouter({
  history: createWebHistory()
  ,routes
  ,scrollBehavior(){//遷移時にページ位置を上に戻す
    return { left : 0, top: 0}
  }
})

export default router;