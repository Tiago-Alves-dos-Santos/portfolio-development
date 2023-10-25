<template>
    <div class="flex flex-wrap justify-center p-4 bg-white sm:p-10 dark:bg-primary-100 scroll-lazy" id="projects">
        <div class="container">
            <title-section title="PROJETOS"></title-section>
            <div class="flex flex-wrap justify-start w-full mt-3 sm:justify-center 2xl:justify-start">
                <card-projects v-for="(value, index) in projects" :key="index" :project="value"></card-projects>
            </div>
            
        </div>
    </div>
</template>
<script>
import CardProjects from '../CardProjects.vue';
export default {
    components: {
        CardProjects
    },
    data() {
        return {
            projects: require("@/assets/projects/projects.json"),
        }
    },
    methods: {
        loadImageProjects() {
            for (const value of this.projects) {
                value.picture = require("@/assets/projects/" + value.picture);
            }
        },
    },
    mounted(){
        this.loadImageProjects();
    }
}
</script>