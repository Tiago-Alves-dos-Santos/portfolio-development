<template>
    <div class="flex justify-center bg-white shadow-md">
        <div class="container flex justify-between py-4 bg-red-400 ">
            <div>
                <font-awesome-icon icon="moon"/>
                <font-awesome-icon icon="fa-solid fa-sun" />
            </div>
            <div class="flex space-x-4">
                <!-- <router-link to="/">SOBRE</router-link> 
                <router-link to="/">HABILIDADES</router-link> 
                <router-link to="/">PROJETOS</router-link> 
                <router-link to="/">EXPERIÊNCIAS</router-link> 
                <router-link to="/">CONTATO</router-link>  -->

                <a href="">SOBRE</a>
                <a href="">HABILIDADES</a>
                <a href="">PROJETOS</a>
                <a href="">EXPERIÊNCIAS</a>
                <a href="">CONTATO</a>
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