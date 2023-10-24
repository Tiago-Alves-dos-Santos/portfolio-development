<template>
<div class="w-full">
    <NavBar></NavBar>
    <AboutPage></AboutPage>
    <SkillPage></SkillPage>
    <ProjectsPage></ProjectsPage>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import AboutPage from '@/components/pages/AboutPage.vue';
import NavBar from '@/components/NavBar.vue';
import SkillPage from '@/components/pages/SkillPage.vue';
import ProjectsPage from '@/components/pages/ProjectsPage.vue';
export default {
  name: 'HomeView',
  components: {
    NavBar,
    AboutPage,
    SkillPage,
    ProjectsPage
  }
}
</script>
