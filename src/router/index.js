import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue'

// 使用createRouter创建路由实例
const router = createRouter({
    history: createWebHashHistory(), // Hash模式：createWebHashHistory；History模式：createWebHistory
    routes: [
        {
            path: '/',
            component: Home
        }
    ]
})

// 抛出路由实例，在main.js中引用
export default router