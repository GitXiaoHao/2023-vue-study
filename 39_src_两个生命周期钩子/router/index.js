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
        component: () => import("@/views/Home"),
        children: [
            {
                name: 'News',
                path: 'news',
                component: () => import("@/views/News")
            },
            {
                path: 'message',
                component: () => import("@/views/Message"),
                children: [
                    {
                        name: 'Detail',
                        path: 'detail/:id/:title',
                        component: () => import("@/views/Detail"),
                        //props的第二种写法,若为真,就会把该路由组件收到的所有params参数以props的形式传递
                        props: true
                        //props函数
                        // props($route){
                        //     return {
                        //         id: $route.query.id,
                        //         title: $route.query.title
                        //     }
                        // }
                        // props({query: {id, title}}) {
                        //     return {
                        //         id: id,
                        //         title: title
                        //     }
                        // }
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