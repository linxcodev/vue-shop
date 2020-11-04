import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('@/views/Categories.vue')
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('@/views/Books.vue')
    },
    {
      path: '/category/:slug',
      name: 'category',
      component: () => import( /* webpackChunkName: "category" */
      './views/Category.vue')
    },
    {
     path: '/books/:slug',
     name: 'book',
     component: () => import( /* webpackChunkName: "book" */
    './views/Book.vue')
    },
    {
     path: '/checkout',
     name: 'checkout',
     component: () => import( /* webpackChunkName: "checkout" */
    './views/Checkout.vue'),
     meta: { auth: true } // penandanya ini gans
    },
    {
     path: '/payment',
     name: 'payment',
     component: () => import( /* webpackChunkName: "payment" */
    './views/Payment.vue'),
     meta: { auth: true }
    },
    {
     path: '*',
     redirect: {
       name: 'home'
     }
   },
  ]
});

// tambahkan ini untuk melakukan pengecekan pada setiap routing
router.beforeEach((to, from, next) => {
 // jika routing ada meta auth-nya maka
 if (to.matched.some(record => record.meta.auth)) {
   // jika user adalah guest
   if(store.getters['auth/guest']){
     // tampilkan pesan bahwa harus login dulu
     store.dispatch('alert/set', {
       status : true,
       text : 'Login first',
       color : 'error',
     })

     store.dispatch('setPrevUrl', to.path)
     // tampilkan form login
     store.dispatch('dialog/setComponent', 'login')
     store.dispatch('dialog/setStatus', true)
   }
   else{
     next()
   }
 }
 else{
   next()
 }
})

// tambah ini juga
export default router
