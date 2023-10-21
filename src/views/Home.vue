<template>
<div class="w-full">
    <NavBar></NavBar>
    <AboutPage></AboutPage>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import AboutPage from '@/components/pages/AboutPage.vue';
import NavBar from '@/components/NavBar.vue';
export default {
  name: 'HomeView',
  components: {
    NavBar,
    AboutPage,
  }
}
</script>
