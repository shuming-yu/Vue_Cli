<!-- nav 參考 : https://getbootstrap.com/docs/5.1/components/navbar/ -->
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'newpage' }" class="nav-link">Add NewPage</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <router-view/>
  </div>
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
