<template>
    <div class="flex justify-center p-4 bg-code parallax-bg scroll-lazy" id="skills">
        <div class="container">
            <title-section title="HABILIDADES" :dark_theme="false"></title-section>
            <div class="flex justify-center w-full mt-2 mb-2 ">
                <select v-model="skillFilter" class="w-1/2 py-3 rounded-lg">
                    <option value="all">TUDO</option>
                    <option value="front">FRONT-END</option>
                    <option value="back">BACK-END</option>
                    <option value="frameworkCSS">FRAMEWORK CSS</option>
                    <option value="frameworkJS">FRAMEWORK JS</option>
                    <option value="database">DATABASE</option>
                    <option value="database-sql">DATABASE SQL</option>
                    <option value="database-no-sql">DATABASE NO-SQL</option>
                </select>
            </div>
            <div class="flex justify-start w-full overflow-x-auto sm:justify-center sm:flex-wrap 2xl:justify-start">
                <card v-for="(value, index) in skills" :key="index" :title="value.title" :img="value.picture" :class="{
                    'hidden': hiddenSkill(value)
                }"></card>
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
                value.picture = require("@/assets/skills/" + value.picture);
            }
        },
        hiddenSkill(skill){
            let show = true; //default value
            if(this.skillFilter == 'all'){
                show = false;
            }else if(this.skillFilter == 'front' && (skill.category == 'front' || skill.category == 'frameworkCSS' || skill.category == 'frameworkJS')){ //front end
                show = false;
            }else if(this.skillFilter == 'database' && (skill.category == 'database-sql' || skill.category == 'database-no-sql') ){
                show = false;
            }else if(this.skillFilter == skill.category){ //others
                show = false;
            }
            return show;
        }
    },
    mounted() {
        this.loadSkills();
    }
}
</script>