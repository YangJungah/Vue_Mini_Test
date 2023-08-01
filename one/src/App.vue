<template>
  <div id="j">
    <MyNavbar/>
    <div>
      <router-view></router-view>
      <div>
        <iframe id="projectIframe" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import MyNavbar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    MyNavbar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbit&display=swap');
#j {
  font-family: 'Orbit', sans-serif;
  text-align: center;
}
</style>