<template>
  <header-page/>
  <div><router-view /></div>
<!--  if router view is not showing:
      npm uninstall vue-router --save
      npm i vue-router@next --save -->
  <footer-page/>
</template>

<script>
import HeaderPage from "./components/HeaderPage.vue"
import FooterPage from "./components/FooterPage.vue"

export default {
  name: 'App',
  components: {
    HeaderPage,
    FooterPage,
  }
}
</script>

<style>
</style>