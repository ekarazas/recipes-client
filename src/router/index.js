import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/addrecipe',
    name: 'AddRecipe',
    component: () => import(/* webpackChunkName: "addrecipe" */ '../views/AddRecipe.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token');
    if (token) {
      next();
    } else {
      router.replace('/login');
    }
  } else {
    next();
  }
});

export default router;
