<template>
    <div class="relative py-5 mt-1 mb-2 mr-2 bg-white border rounded-md shadow-md px-7 md:mb-0 md:pb-14 dark:bg-gray-500"> 
        <div class="flex justify-center">
            <img :src="company.picture" alt="" class="w-[110px]">
        </div>
        <div class="flex justify-center">
            <span class="text-3xl text-center dark:text-zinc-300"> {{company.title}}</span>
        </div>
        <div class="p-4 mt-2 border shadow-sm">
            <ul>
                <li>
                    <span class="font-bold">Estado:</span> {{company.state}}
                </li>
                <li>
                    <span class="font-bold">Cidade:</span> {{company.city}}
                </li>
                <li>
                    <span class="font-bold">Jornada:</span> {{company.time_job}}
                </li>
                <li>
                    <span class="font-bold">Formato:</span> {{company.type_job}}
                </li>
                <li>
                    <span class="font-bold">Sênioridade:</span> {{company.my_level}}
                </li>
                <li>
                    <span class="font-bold">Inicio:</span> {{company.started_date}}
                </li>
                <li>
                    <span class="font-bold">Fim:</span> {{company.finished_date}}
                </li>
                <li>
                    <span class="font-bold">Tempo:</span> {{time_in_company.years}} anos e {{ time_in_company.months + 1 }} meses
                </li>
            </ul>
        </div>
        <div class="p-4 mt-3 border">
            {{ company.about_my_job }}
        </div>
        <div>
            Botoes
        </div>
    </div>
</template>
<script>
import Functions from '@/js/functions';
export default {
    data() {
        return {
            time_in_company: Functions.dateDifference(this.company.started_date, this.company.finished_date)
        }
    },
    props: {
        company: {
            type: Object,
            default: null
        }
    }
}
</script>