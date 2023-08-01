Vue2 이용
---
One-> localhost:8080으로 주소 지정
Two -> localhost:8081으로 주소 지정

## Project setup
```
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: 8080,
  },
  transpileDependencies: true
})

```

## 라우터 설정
```
// router.js (또는 index.js 등)
import Vue from 'vue';
import VueRouter from 'vue-router';

// Vue 컴포넌트를 import 합니다.
import Home from './views/MainHome.vue';
import About from './views/AboutUs.vue';

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
  ],
});

export default router;

```
