<template>
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
        <span class="fs-4">정아의 연습장</span>
      </a>

      <ul class="nav nav-pills">
        <!-- Vue Router 링크 -->
        <li class="nav-item"><router-link to="/" class="nav-link active" aria-current="page">Home</router-link></li>
        <li class="nav-item"><router-link to="/about" class="nav-link">AboutMe</router-link></li>
        <!-- 일반 링크 (페이지 새로고침 방지) -->
        <li class="nav-item"><a class="nav-link" href="javascript:void(0);" @click="loadIframe">two로 이동</a></li>
      </ul>
    </header>
    <iframe id="projectIframe" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: 'MyNavbar',
  methods: {
    loadIframe() {
      // Get the iframe element by its ID
      const iframe = document.getElementById('projectIframe');
      iframe.src = 'http://localhost:8081';
    }
  }
}
</script>

<style scoped>
iframe {
  width: 100%;
  height: 1000px;
}
</style>
