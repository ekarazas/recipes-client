import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/myrecipes',
    name: 'MyRecipes',
    component: () => import(/* webpackChunkName: "myrecipes" */ '../views/MyRecipes.vue'),
  },
  {
    path: '/addrecipe',
    name: 'AddRecipe',
    component: () => import(/* webpackChunkName: "addrecipe" */ '../views/AddRecipe.vue'),
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

export default router;
