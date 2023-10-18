<template>
    <div class="flex justify-center bg-white shadow-md">
        <div class="container flex justify-between py-2 md:py-0">
            <!-- button toggle dark theme -->
            <div class="relative w-[30px] h-[30px] rounded-full flex justify-center flex-col items-center bg-black
            cursor-pointer md:top-[10px]">
                <font-awesome-icon icon="moon" class="text-yellow-300"/>
                <font-awesome-icon icon="fa-solid fa-sun" class="hidden"/>
            </div>
            <!-- links of navbar -->
            <div class="flex">
                <!-- <router-link to="/">SOBRE</router-link> 
                <router-link to="/">HABILIDADES</router-link> 
                <router-link to="/">PROJETOS</router-link> 
                <router-link to="/">EXPERIÊNCIAS</router-link> 
                <router-link to="/">CONTATO</router-link>  -->

                <div class="hidden md:flex">
                    <a href="" class="nav-active py-4 px-4 hover:bg-primary-900 hover:text-white">SOBRE</a>
                    <a href="" class="py-4 px-4 hover:bg-primary-900 hover:text-white">HABILIDADES</a>
                    <a href="" class="py-4 px-4 hover:bg-primary-900 hover:text-white">PROJETOS</a>
                    <a href="" class="py-4 px-4 hover:bg-primary-900 hover:text-white">EXPERIÊNCIAS</a>
                    <a href="" class="py-4 px-4 hover:bg-primary-900 hover:text-white">CONTATO</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            teste: 'teetet'
        }
    },
}
</script>