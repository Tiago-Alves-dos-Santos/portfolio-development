<template>
    <div class="w-[200px] bg-white flex justify-center flex-col items-center rounded-md py-2 px-2 m-2 hover:scale-105">
        <div>
            <img :src="img" alt="" class="w-[100px]"> 
        </div>
        <div>
            <h3 class="text-xl font-bold uppercase">{{title}}</h3>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
export default {
    props: {
        img: String,
        title: {
            type: String,
            required: true,
        }
    },
}
</script>