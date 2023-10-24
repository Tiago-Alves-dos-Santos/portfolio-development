<template>
    <div class="flex justify-center bg-gray-100 shadow-md dark:bg-black">
        <div class="container flex justify-between py-2 sm:py-0">
            <!-- button toggle dark theme -->
            <div class="flex flex-col justify-center">
                <div class="relative w-[30px] h-[30px] rounded-full flex justify-center flex-col items-center
                ml-1 
              dark:border-white
                sm:ml-0
                border-2 border-black cursor-pointer" @click="toggleTheme">
                    <font-awesome-icon id="theme_dark" icon="fa-slid fa-moon" class=" dark:text-white" />
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

                <div class="relative flex flex-col items-center content-center justify-center sm:hidden"
                    @click="openMenuMobile">
                    <font-awesome-icon icon="fa-solid fa-bars" class="mr-2 text-xl dark:text-white sm:mr-0" />
                    <div id="menuMobile"
                        class="hidden z-30 absolute flex-col top-[30px] right-[8px] rounded-md text-center shadow-md bg-white border border-black dark:bg-primary-600">
                        <a href="" v-for="(value, index) in menu_links" :key="index"
                            class="px-2 py-2 uppercase border-b border-black dark:text-white ">
                            {{ value.name }}
                        </a>
                    </div>
                </div>
                <div class="hidden sm:flex">
                    <!-- nav-active -->
                    <a :href="value.url"
                        class="px-4 py-4 uppercase hover:bg-primary-900 hover:text-white dark:text-white dark:hover:text-black dark:hover:bg-white"
                        v-for="(value, index) in menu_links" :key="index">
                        {{ value.name }}
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
            theme_actual: Theme.light,
            menu_links: {
                about: {
                    name: 'sobre',
                    url: '#about',
                },
                skills: {
                    name: 'habilidades',
                    url: '#skills',
                },
                projects: {
                    name: 'projetos',
                    url: '#projects',
                },
                experience: {
                    name: 'experiência',
                    url: '/',
                },
                contact: {
                    name: 'contato',
                    url: '/',
                },
            },
            menuMobileIsOpen: false
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
        },
        openMenuMobile() {
            let menuMobile = document.getElementById('menuMobile');
            if (this.menuMobileIsOpen) {//close menu mobile
                menuMobile.classList.add('hidden');
                menuMobile.classList.remove('flex');
                this.menuMobileIsOpen = false;
            } else {//open menu
                menuMobile.classList.remove('hidden');
                menuMobile.classList.add('flex');
                this.menuMobileIsOpen = true;
            }
        }
    }
}
</script>