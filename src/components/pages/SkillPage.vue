<template>
    <div class="flex justify-center p-4 mt-1 bg-code">
        <h1>Skills</h1>
        <div class="container">
            <title-section title="HABILIDADES"></title-section>
            <div class="flex flex-wrap justify-center md:justify-start">
                <card v-for="(value, index) in skills" :key="index" :title="value.title" :img="value.picture"></card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            skills: {},
        }
    },
    methods: {
        loadSkills() {
            let habilitys = require("@/assets/skills/habilitys.json");
            this.skills = habilitys;
            for (const value of this.skills) {
                console.log(value.name);
                value.picture = require("@/assets/skills/" + value.picture);
            }
        }
    },
    mounted() {
        this.loadSkills();
    }
}
</script>