//
// 该文件专门用于创建整个应用的路由器
//

//应用 路由router
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)
const constantRoutes = [
    {
        path: '/about',
        component: () => import("@/views/About")
    },
    {
        path: '/home',
        component: () => import("@/views/Home")
    }
]
const router = new VueRouter({
    routes: constantRoutes
})

export default router