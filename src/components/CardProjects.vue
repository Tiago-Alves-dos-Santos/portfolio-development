<template>
    <div class="relative max-w-md py-5 mt-1 mb-2 mr-2 bg-white border rounded-md shadow-md px-7 md:mb-0 md:pb-14 dark:bg-gray-500">
        <div class="flex justify-center">
            <img :src="project.picture" alt="" class="w-1/4 rounded-md">
        </div>
        <div>
            <h1 class="text-3xl :text-center dark:text-zinc-300">{{ project.title ?? title }}</h1>
        </div>
        <div class="text-left md:text-justify dark:text-zinc-300" v-html="project.short_description ?? description"></div>
        <div class="mt-4 flex flex-wrap justify-center md:absolute md:bottom-[10px] md:right-0">
            <a :href="project.links.github_repo" target="_blank"
                class="px-3 py-1 mr-2 text-white bg-black rounded-md">GITHUB</a>
            <a :href="project.links.readme_md" target="_blank" class="px-3 py-1 mr-2 text-white bg-blue-400 rounded-md">LER
                MAIS</a>
            <button v-if="project.languages" class="px-3 py-1 mr-2 text-white bg-teal-500 rounded-md" @click="readLanguages">TECNOLOGIAS</button>
            <a v-if="project.links.server || project.links.github_page"
                :href="project.links.server ?? project.links.github_page" target="_blank"
                class="px-3 py-1 mr-2 text-white bg-green-500 rounded-md">VER SISTEMA</a>
        </div>
    </div>
</template>
<script>
import Swal from 'sweetalert2';
export default {
    data() {
        return {

        }
    },
    props: {
        project: {
            type: Object,
            default: null
        },
    },
    methods: {
        readLanguages() {
            let htmlList = "<ul>";
            this.project.languages.forEach(element => {
                htmlList += "<li>" + element.name +" <span class='italic'> v("+element.version+"</span>) "+"<span>"+element.category+"</span>" +"</li>";
            });
            htmlList += "</ul>";

            Swal.fire({
                title: this.project.title,
                icon: 'info',
                html:htmlList,
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText:'OK',


            })
        }
    },
    mounted() {
        // this.loadImageProjects();
    }
}
</script>