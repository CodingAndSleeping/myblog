<template>
  <div id="app">
    <blog-header></blog-header>
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs> -->
    <router-view></router-view>
  </div>
</template>

<script>
import BlogHeader from './components/BlogHeader.vue'



export default {
  name: 'App',
  components: {
    BlogHeader

  }
}
</script>

<style>

</style>
