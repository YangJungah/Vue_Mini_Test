<template>
    <div>
        <h1>나는 양정아입니다. <br>나는 Metanet의 인턴사원입니다.</h1>
        <br>
        <a class="btn btn-dark" href="javascript:void(0);" @click="loadIframe">Metatnet더알아보기</a>
    </div>
</template>

<script>
export default {
    methods: {
    loadIframe() {
      const iframe = document.getElementById('projectIframe');
      iframe.src = 'http://localhost:8081';
    }
  }
}
</script>

<style>
iframe {
  width: 100%;
  height: 1000px;
}
</style>