<template>
    <div class="flex justify-center mt-1" >
        <div class="container bg-white rounded-md dark:bg-primary-100">
            <TitleSection title="Sobre"></TitleSection>
            <div class="flex justify-center w-full mt-3">
                <div class="w-full pb-2 md:px-4 md:flex">
                    <!-- Picture and info text -->
                    <div class="p-2 border-b border-b-black md:w-full md:border-r md:border-b-0 md:border-r-black">
                        <div class="flex justify-center">
                            <img src="@/assets/iprofile.png" class="w-[100px] md:w-[150px] rounded-full" alt="">
                        </div>
                        <div class="mt-2">
                            <h1 class="dark:text-zinc-300">
                                <span class="font-bold">Formação:</span>
                                Graduado em Sistemas de Informação - UNINASSAU
                            </h1>
                            <h2 class="dark:text-zinc-300">
                                <span class="font-bold">Inglês:</span>
                                Curson inglês na Wizard (Duração)
                            </h2>
                        </div>
                    </div>
                    <!-- About me -->
                    <div class="relative p-2 md:p-0 md:pl-2">
                        <div>
                            <p class="text-justify">
                                Olá! <span>{{welcome_message}}</span>! Me chamo Tiago Alves sou Desenvolvedor Web ‘back-end’ com PHP tenho {{ experience_time.years }} anos de experiencia no mercado, contando com estágios, empregos e 'freelancers'. Nesta curta estrada tive contato com diversas tecnologias, qual informo na seção de habilidades(link). Destas habilidades minha paixão, no ramo ‘back-end’, se encontra no PHP, pois ao contrário do ditado popular (PHP é só CRUD) ele muito mais que CRUD. Outra paixão que tenho saindo do ramo de desenvolvimento é tocar meu saxofone, afinal quem não gosta de uma boa música​!? 🎷​🎵
                            </p>
                        </div>
                        <div class="flex justify-end md:absolute md:bottom-px md:right-px">
                            <a href="" target="_blank">
                                <img src="@/assets/icons8-linkedin.svg" alt="linkedin">
                            </a>
                            <a href="" target="_blank">
                                <img src="@/assets/icons8-whatsapp.svg" alt="whatsapp">
                            </a>
                            <a href="" target="_blank">
                                <img src="@/assets/icons8-telegram.svg" alt="telegram">
                            </a>
                            <a href="" target="_blank">
                                <img src="@/assets/icons8-pdf-48.png" alt="curricúlo">
                            </a>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
import TitleSection from '../TitleSections.vue';
import Functions from '@/js/functions';
/* eslint-disable */
export default {
    components: {
        TitleSection
    },
    data() {
        return {
            welcome_message: Functions.getGoodTimeMessage(),
            experience_time: Functions.dateDifference('2019-03-01'),
        }
    },
}
</script>