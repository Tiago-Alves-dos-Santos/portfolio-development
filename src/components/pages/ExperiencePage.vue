<template>
    <div class="flex justify-center p-4 bg-code parallax-bg scroll-lazy" id="experiences">
        <div class="container">
            <title-section title="EXPERIÊNCIAS" :dark_theme="false"></title-section>
            <div class="bg-white">
                <card-experience></card-experience>
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

        }
    },
}
</script>