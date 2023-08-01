Vue2 이용😀
---
One-> localhost:8080으로 주소 지정
Two -> localhost:8081으로 주소 지정


## Project setup(config파일 수정)
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
import Vue from 'vue';
import VueRouter from 'vue-router';

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
