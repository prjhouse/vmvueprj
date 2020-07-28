import Vue from "vue"
import vueRouter from "vue-router"

Vue.use(vueRouter)

const routes = [
    {
        path:"/",
        name:"pageone",
        component:()=>import("../pages/pageone"),
        meta:{index:1}
    },
    {
        path:"/pagetwo",
        name:"pagetwo",
        component:()=>import("../pages/pagetwo"),
        meta:{index:1}
    },
    {
        path:"/pagethr",
        name:"pagethr",
        component:()=>import("../pages/pagethr"),
        meta:{index:1}
    },
    {
        path:"/pagefor",
        name:"pagefor",
        component:()=>import("../pages/pagefor"),
        meta:{index:1}
    },
    {
        path:"/pagefiv",
        name:"pagefiv",
        component:()=>import("../pages/pagefiv"),
        meta:{index:1}
    },
    {
        path:"/adress",
        name:"adress",
        component:()=>import("../view/adress"),
        meta:{index:2}
    },
    {
        path:"/select",
        name:"select",
        component:()=>import("../view/select"),
        meta:{index:2}
    },
    {
        path:"/borral",
        name:"borral",
        component:()=>import("../view/borral"),
        meta:{index:2}
    },
    {
        path:"/order",
        name:"order",
        component:()=>import("../view/order"),
        meta:{index:2}
    }
]
const router = new vueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })


  //导出路由
export default router

