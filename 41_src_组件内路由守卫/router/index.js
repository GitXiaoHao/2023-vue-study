//
// 该文件专门用于创建整个应用的路由器
//

//应用 路由router
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)
const constantRoutes = [
    {
        name: 'About',
        path: '/about',
        component: () => import("@/views/About"),
        meta: {title: '关于'}
    },
    {
        name: 'Home',
        path: '/home',
        component: () => import("@/views/Home"),
        meta: {title: "主页"},

        children: [
            {
                name: 'News',
                path: 'news',
                component: () => import("@/views/News"),
                meta: {isAuth: true, title: '新闻'}
            },
            {
                name: 'Message',
                path: 'message',
                component: () => import("@/views/Message"),
                meta: {isAuth: true, title: '消息'},
                children: [
                    {
                        name: 'Detail',
                        path: 'detail/:id/:title',
                        component: () => import("@/views/Detail"),
                        meta: {title: "细节"},
                        //props的第二种写法,若为真,就会把该路由组件收到的所有params参数以props的形式传递
                        props: true
                    }
                ]
            }
        ]
    },
    {
        path: '/404',
        component: () => import('@/views/Page404'),
        hidden: true
    },
    // 404 page must be placed at the end !!!
    {path: '*', redirect: '/404', hidden: true}
]
const router = new VueRouter({
    routes: constantRoutes
})

export default router