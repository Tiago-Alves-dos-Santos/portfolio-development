<template>
    <div class="flex justify-center bg-white shadow-md dark:bg-black">
        <div class="container flex justify-between py-2 sm:py-0">
            <!-- button toggle dark theme -->
            <div class="flex justify-center flex-col">
                <div class="relative w-[30px] h-[30px] rounded-full flex justify-center flex-col items-center
                ml-1 
              dark:border-white
                sm:ml-0
                border-2 border-black cursor-pointer" @click="toggleTheme">
                    <font-awesome-icon id="theme_dark" icon="moon" class=" dark:text-white" />
                    <font-awesome-icon id="theme_light" icon="fa-solid fa-sun" class="hidden dark:text-white" />
                </div>
            </div>
            <!-- links of navbar -->
            <div class="flex">
                <!-- <router-link to="/">SOBRE</router-link> 
                <router-link to="/">HABILIDADES</router-link> 
                <router-link to="/">PROJETOS</router-link> 
                <router-link to="/">EXPERIÊNCIAS</router-link> 
                <router-link to="/">CONTATO</router-link>  -->
                <div class="flex flex-col justify-center items-center content-center sm:hidden">
                    <font-awesome-icon icon="fa-solid fa-bars" class="text-xl mr-2 dark:text-white sm:mr-0" />
                </div>
                <div class="hidden sm:flex">
                    <a href="" class="nav-active py-4 px-4 hover:text-white dark:text-white 
                    dark:hover:text-black dark:hover:bg-white">
                        SOBRE
                    </a>
                    <a href="" class="py-4 px-4 hover:bg-primary-900 hover:text-white 
                    dark:text-white dark:hover:text-black dark:hover:bg-white">
                        HABILIDADES
                    </a>
                    <a href="" class="py-4 px-4 hover:bg-primary-900 hover:text-white 
                    dark:text-white dark:hover:text-black dark:hover:bg-white">
                        PROJETOS
                    </a>
                    <a href="" class="py-4 px-4 hover:bg-primary-900 hover:text-white 
                    dark:text-white dark:hover:text-black dark:hover:bg-white">
                        EXPERIÊNCIAS
                    </a>
                    <a href="" class="py-4 px-4 hover:bg-primary-900 hover:text-white 
                    dark:text-white dark:hover:text-black dark:hover:bg-white">
                        CONTATO
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Theme from '../js/enum/theme.js';
export default {
    data() {
        return {
            data_theme: Theme,
            theme_actual: Theme.light
        }
    },
    methods: {
        toggleTheme() {
            let body = document.body;
            let theme_dark = document.getElementById('theme_dark');
            let theme_light = document.getElementById('theme_light');
            if (this.theme_actual == Theme.light) {//theme to dark
                this.theme_actual = Theme.dark;
                //class
                body.classList.add('dark');
                theme_dark.classList.add('hidden');
                theme_light.classList.remove('hidden');
            } else {//theme to light
                this.theme_actual = Theme.light;
                body.classList.remove('dark');
                theme_dark.classList.remove('hidden');
                theme_light.classList.add('hidden');
            }
        }
    }
}
</script>