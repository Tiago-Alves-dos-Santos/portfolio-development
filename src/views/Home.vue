<template>
<div class="w-full">
    <NavBar></NavBar>
    <AboutPage></AboutPage>
    <SkillPage></SkillPage>
    <ProjectsPage></ProjectsPage>
    <ExperiencePage></ExperiencePage>
    <ContactPage></ContactPage>
</div>
</template>

<script>
// @ is an alias to /src
import AboutPage from '@/components/pages/AboutPage.vue';
import NavBar from '@/components/NavBar.vue';
import SkillPage from '@/components/pages/SkillPage.vue';
import ProjectsPage from '@/components/pages/ProjectsPage.vue';
import ExperiencePage from '@/components/pages/ExperiencePage.vue';
import ContactPage from '@/components/pages/ContactPage.vue';
export default {
  name: 'HomeView',
  components: {
    NavBar,
    AboutPage,
    SkillPage,
    ProjectsPage,
    ExperiencePage,
    ContactPage
  }
}
</script>
