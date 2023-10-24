<template>
    <div class="flex justify-center p-4 bg-white sm:p-10 dark:bg-primary-100">
        <div class="container">
            <title-section title="PROJETOS"></title-section>
            <div class="flex justify-center w-full mt-3 md:justify-start">
                <card-projects></card-projects>
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
    mounted(){
        console.log(this.projects);
    }
}
</script>