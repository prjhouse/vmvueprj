import Vue from "vue"
import vueRouter from "vue-router"

Vue.use(vueRouter)

const routes = [
    {
        path:"/",
        name:"pageone",
        component:()=>import("../pages/pageone"),
    },
    {
        path:"/pagetwo",
        name:"pagetwo",
        component:()=>import("../pages/pagetwo"),
    },
    {
        path:"/pagethr",
        name:"pagethr",
        component:()=>import("../pages/pagethr"),
    },
    {
        path:"/pagefor",
        name:"pagefor",
        component:()=>import("../pages/pagefor"),
    },
    {
        path:"/pagefiv",
        name:"pagefiv",
        component:()=>import("../pages/pagefiv"),
    }
]
const router = new vueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })


  //导出路由
export default router

