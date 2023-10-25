<template>
    <div class="fixed z-50 flex justify-center w-full bg-gray-100 shado w-md dark:bg-black">
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
            <!-- links navbar -->
            <div class="flex">
                <div class="relative flex flex-col items-center content-center justify-center sm:hidden"
                    @click="openMenuMobile">
                    <font-awesome-icon icon="fa-solid fa-bars" class="mr-2 text-xl dark:text-white sm:mr-0" />
                    <div id="menuMobile"
                        class="hidden z-30 absolute flex-col top-[30px] right-[8px] rounded-md text-center shadow-md bg-white border border-black dark:bg-primary-600">
                        <a :href="value.url" v-for="(value, index) in menu_links" :key="index"
                            :class="['px-2 py-2 uppercase border-b border-black dark:text-white links-active', this.hash_now == value.hash ?'nav-active':'']">
                            {{ value.name }}
                        </a>
                    </div>
                </div>
                <!-- small until xl size -->
                <div class="hidden sm:flex">
                    <!-- nav-active -->
                    <a :href="value.url"
                        :class="['px-4 py-4 uppercase hover:bg-primary-900 hover:text-white dark:text-white dark:hover:text-black dark:hover:bg-white links-active',
                        this.hash_now == value.hash ?'nav-active':'' ]"
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
            hash_now: '',
            menu_links: {
                about: {
                    name: 'sobre',
                    url: '#about',
                    hash: 'about',
                },
                skills: {
                    name: 'habilidades',
                    url: '#skills',
                    hash: 'skills',
                },
                projects: {
                    name: 'projetos',
                    url: '#projects',
                    hash: 'projects',
                },
                experience: {
                    name: 'experiência',
                    url: '#experiences',
                    hash: 'experiences',
                },
                contact: {
                    name: 'contato',
                    url: '/',
                    hash: 'contact',
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
            if (this.theme_actual == Theme.light) {//theme light to dark
                this.theme_actual = Theme.dark;
                //class
                body.classList.add('dark');
                theme_dark.classList.add('hidden');
                theme_light.classList.remove('hidden');
            } else {//theme dark to light
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
        },
        linkActive(){
            let after_hash = window.location.hash.substring(1);
            this.hash_now = after_hash;
        }
    },
    mounted(){
        //event - change of hash(#) in url
        window.addEventListener("hashchange", this.linkActive);
    }
}
</script>