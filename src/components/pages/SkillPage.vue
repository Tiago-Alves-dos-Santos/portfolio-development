<template>
    <div class="flex justify-center p-4 mt-1 bg-code">
        <h1>Skills</h1>
        <div class="container">
            <title-section title="HABILIDADES"></title-section>
            <div>
                <card></card>
            </div>
        </div>      
    </div>
</template>

<script>
export default {
    data() {
        return {
           skills: {} 
        }
    },
    mounted() {
        let habilitys = require("@/assets/skills/habilitys.json");
        console.log(habilitys);
    }
}
</script>