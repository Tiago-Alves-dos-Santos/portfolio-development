<template>
    <div class="relative max-w-md py-5 mb-2 mr-2 bg-white border rounded-md shadow-md px-7 md:mb-0 md:pb-14 ">
        <div class="flex justify-center">
            <img :src="project.picture ?? image" alt="" class="w-1/4 rounded-md">
        </div>
        <div>
            <h1 class="text-3xl text-center">{{ project.title ?? title }}</h1>
        </div>
        <div class="text-justify" v-html="project.short_description ?? description"></div>
        <div class="mt-4 flex flex-wrap justify-center md:absolute md:bottom-[10px] md:right-0"
            v-if="project || github_repo">
            <a :href="project.links.github_repo" target="_blank"
                class="px-3 py-1 mr-2 text-white bg-black rounded-md">GITHUB</a>
            <a :href="project.links.readme_md" target="_blank" class="px-3 py-1 mr-2 text-white bg-blue-400 rounded-md">LER
                MAIS</a>
            <button v-if="project" class="px-3 py-1 mr-2 text-white bg-teal-500 rounded-md" @click="readLanguages">TECNOLOGIAS</button>
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
        github_repo: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: require("@/assets/projects/loading_project.jpg"),
        },
        title: {
            type: String,
            default: 'Aguarde...'
        },
        description: {
            type: String,
            default: "O <span class='font-bold'> projeto </span> está em <span class='font-bold'>desenvolvimento</span>, por favor aguarde a conclusão e caso deseje acompanhar acesse o link do github. Obrigado pela compreenção!"
        }
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