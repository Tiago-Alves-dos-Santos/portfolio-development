<template>
    <div class="flex justify-center p-4 bg-code parallax-bg scroll-lazy" id="experiences">
        <div class="container">
            <title-section title="EXPERIÊNCIAS" :dark_theme="false"></title-section>
            <div class="bg-white">
                <card-experience v-for="(value, index) in companys" :key="index" :company="value"></card-experience>
            </div>
        </div>
    </div>
</template>
<script>
import CardExperience from '../CardExperience.vue';
export default {
    components: {
        CardExperience
    },
    data() {
        return {
            companys: require("@/assets/company/companys.json"),
        }
    },
    methods: {
        loadPicturesCompany(){
            for (const value of this.companys) {
                value.picture = require("@/assets/company/" + value.picture);
            }
        }
    },
    mounted(){
        this.loadPicturesCompany();
    }
}
</script>