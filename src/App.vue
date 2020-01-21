<template>
  <div id="app">
    <appHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader/index.vue"

export default {
  name: "app",
  components: {
    AppHeader,
  }
};
</script>
