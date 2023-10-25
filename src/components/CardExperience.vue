<template>
    <div class="relative py-5 mt-1 mb-2 mr-2 bg-white border rounded-md shadow-md px-7 md:mb-0 md:pb-14 dark:bg-gray-500">
        <div class="flex justify-center">
            <img :src="company.picture" alt="" class="w-[110px]">
        </div>
        <div class="flex justify-center">
            <span class="text-3xl text-center dark:text-zinc-300"> {{ company.title }}</span>
        </div>
        <div class="p-4 mt-2 border shadow-sm">
            <ul>
                <li class="dark:text-zinc-300">
                    <span class="font-bold">Estado:</span> {{ company.state }}
                </li>
                <li class="dark:text-zinc-300">
                    <span class="font-bold">Cidade:</span> {{ company.city }}
                </li>
                <li class="dark:text-zinc-300">
                    <span class="font-bold">Jornada:</span> {{ company.time_job }}
                </li>
                <li class="dark:text-zinc-300">
                    <span class="font-bold">Formato:</span> {{ company.type_job }}
                </li>
                <li class="dark:text-zinc-300">
                    <span class="font-bold">Sênioridade:</span> {{ company.my_level }}
                </li>
                <li class="dark:text-zinc-300">
                    <span class="font-bold">Inicio:</span> {{ functions.formateDateString(company.started_date) }}
                </li>
                <li class="dark:text-zinc-300">
                    <span class="font-bold">Fim:</span> {{ functions.formateDateString(company.finished_date)  }}
                </li>
                <li class="dark:text-zinc-300">
                    <span class="font-bold">Tempo:</span> {{ time_in_company.years }} anos e {{ time_in_company.months + 1 }}
                    meses
                </li>
            </ul>
        </div>
        <div class="p-4 mt-3 border">
            <div>
                <h4 class="mb-3 text-xl font-bold text-center dark:text-zinc-300">Descrição</h4>
            </div>
            <div>
                <p class="dark:text-zinc-300" v-html="limited_text"></p>
            </div>
        </div>
        <div class="mt-4 flex flex-wrap justify-center md:absolute md:bottom-[10px] md:right-0">
            <button  class="px-3 py-1 mr-2 text-white bg-blue-400 rounded-md" @click="readMore">LER MAIS</button>
            <a :href="company.site_url" target="_blank"
                class="px-3 py-1 mr-2 text-white bg-green-500 rounded-md">SITE</a>
        </div>
    </div>
</template>
<script>
import Functions from '@/js/functions';
import Swal from 'sweetalert2';
export default {
    data() {
        return {
            time_in_company: Functions.dateDifference(this.company.started_date, this.company.finished_date),
            functions: Functions,
        }
    },
    computed: {
        limited_text() {
            let limiti = 300;
            if (this.company.about_my_job.length > limiti) {
                return this.company.about_my_job.substring(0, limiti) + '...';
            }
            return this.company.about_my_job;
        }
    },
    props: {
        company: {
            type: Object,
            default: null
        }
    },
    methods: {
        readMore(){
            Swal.fire({
                title: this.company.title,
                icon: 'info',
                html:this.company.about_my_job,
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText:'OK',
            })
        }
    }
}
</script>