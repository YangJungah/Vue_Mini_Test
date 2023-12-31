import Vue from 'vue';
import VueRouter from 'vue-router';


import Home from './views/MainHome.vue';
import About from './views/AboutUs.vue';
import MFCS from './views/ProjectSample.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/mfcs',
      name: 'mfcs',
      component: MFCS,
    },
  ],
});

export default router;
