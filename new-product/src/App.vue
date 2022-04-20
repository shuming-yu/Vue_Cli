<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  {{ name }}
  <button type="button" class="btn btn-primary">Primary</button>
</template>

<style lang="scss">
@import 'bootstrap';
</style>
<!-- env 參考 : https://cli.vuejs.org/zh/guide/mode-and-env.html -->
<script>
export default {
  data() {
    return {
      name: process.env.VUE_APP_NAME
      // process 固定名稱
      //     機密資訊-存本機   正式環境         測試環境
      // .env  .env.local  .env.production  .env.development  .env.development.local
    }
  }
}
</script>
