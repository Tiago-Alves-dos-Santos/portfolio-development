<template>
    <div class="flex justify-center p-4 mt-1 bg-code parallax-bg">
        <div class="container">
            <title-section title="HABILIDADES"></title-section>
            <div class="flex flex-wrap justify-center md:justify-start">
                <div class="flex justify-center w-full mt-2 mb-2">
                    <select v-model="skillFilter" class="w-1/2 py-3 rounded-lg">
                        <option value="all">TUDO</option>
                        <option value="front">FRONT-END</option>
                        <option value="back">BACK-END</option>
                        <option value="fr-css">FRAMEWORK CSS</option>
                        <option value="fr-js">FRAMEWORK JS</option>
                        <option value="database">DATABASE</option>
                    </select>
                </div>
                <card v-for="(value, index) in skills" :key="index" :title="value.title" :img="value.picture"></card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            skillFilter: 'all',
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