import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/newpage',
    name: 'newpage',
    component: () => import ('../views/NewPage.vue'),
    children: [{
      path: 'a',
      component: () => import('../views/componentA.vue'),
    },{
      path: 'b',
      component: () => import('../views/componentB.vue'),
    },{
      /* 後面加上 /: 名稱自訂 - (動態路由)*/
      path: 'dynamicrouter/:id',
      component: () => import('../views/DynamicRouter.vue'),
    },{
      /* 後面加上 /: 名稱自訂 - (動態路由)*/
      path: 'dynamicrouterprops/:id',
      component: () => import('../views/DynamicRouterProps.vue'),
      // props: () => ({
      //   id: '639ea6167e856e32',  // 寫死方式
      // }),
      props: (route) => {
        console.log('route', route);
        return{
          id: route.params.id,  // 動態方式
        }
      }
    },{
      path: 'namedview',
      component: () => import('../views/namedView.vue'),
      children: [{
        path: 'b2c',
        components: {
          left: () => import('../views/componentB'),
          right: () => import('../views/componentC'),
        }
      },{
        path: 'c2a',
        components: {
          left: () => import('../views/componentC'),
          right: () => import('../views/componentA'),
        }
      }]
    },{
      path: 'routernavigation',
      component: () => import('../views/RouterNavigation.vue'),
    }]
  },
  /* 重新導向說明：https://next.router.vuejs.org/guide/essentials/dynamic-matching.html#catch-all-404-not-found-route */
  // 404頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
  //重新導向
  {
    path: '/newpage/:pathMatch(.*)*',
    redirect: {
      name: 'home',
    }
  }
]

/* 路由選項：https://next.router.vuejs.org/zh/api/#routeroptions */
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'active', /* 當路由啟用時,套用bootstrap樣式active */
  scrollBehavior(to, from, savedPosition) {
    console.log('to:', to,'from:', from,'savedPosition:', savedPosition);
    // `to` 和 `from` 都是路由地址
    // `savedPosition` 滾動行為, 針對路由切換來調整畫面位置
    // return {
    //   top: 500,
    // }
    // 進入newpage頁面,會滾動到畫面最上方
    if(to.fullPath.match('newpage')){
      return{
        top: 0,
      }
    }
  }
})

export default router
