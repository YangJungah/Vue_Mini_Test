<template>
  <div id="app">
    <img alt="logo" src="./assets/metanet.jpg" style="width: 300px; height: auto;">
    <HelloWorld msg="👇여기는 iFrame으로 불러온 localhost:8081의 내용입니다👇"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbit&display=swap');
#app {
  font-family: 'Orbit', sans-serif;
  text-align: center;
}
</style>
