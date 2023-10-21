<template>
    <div class="flex justify-center mt-1" >
        <div class="container bg-white rounded-md dark:bg-primary-200">
            <TitleSection title="Sobre"></TitleSection>
            <div class="flex justify-center w-full mt-3">
                <div class="w-full pb-2 md:px-4 md:flex">
                    <!-- Picture and info text -->
                    <div class="p-2 border-b border-b-black md:w-full md:border-r md:border-b-0 md:border-r-black">
                        <div class="flex justify-center">
                            <img src="@/assets/iprofile.png" class="w-[100px] md:w-[150px] rounded-full" alt="">
                        </div>
                        <div class="mt-2">
                            <h1>
                                <span class="font-bold">Formação:</span>
                                Graduado em Sistemas de Informação - UNINASSAU
                            </h1>
                            <h2>
                                <span class="font-bold">Inglês:</span>
                                Curson inglês na Wizard (Duração)
                            </h2>
                        </div>
                    </div>
                    <!-- About me -->
                    <div class="relative p-2 md:p-0 md:pl-2">
                        <div>
                            <p class="text-justify">
                                Olá! (bom dia)! Me chamo Tiago Alves sou Desenvolvedor Web ‘back-end’ com PHP tenho (4 anos) de experiencia no mercado. Nesta curta estrada tive contato com diversas tecnologias, qual informo na seção de habilidades(link). Destas habilidades minha paixão, no ramo ‘back-end’, se encontra no PHP, pois ao contrário do ditado popular (PHP é só CRUD) ele muito mais que CRUD. Outra paixão que tenho saindo do ramo de desenvolvimento é tocar meu saxofone, afinal quem não gosta!?
                            </p>
                        </div>
                        <div class="flex justify-end md:absolute md:bottom-px md:right-px">
                            <a href="">
                                <img src="@/assets/icons8-linkedin.svg" alt="linkedin">
                            </a>
                            <a href="">
                                <img src="@/assets/icons8-whatsapp.svg" alt="whatsapp">
                            </a>
                            <a href="">
                                <img src="@/assets/icons8-telegram.svg" alt="telegram">
                            </a>
                            <a href="">
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
/* eslint-disable */
export default {
    components: {
        TitleSection
    }
}
</script>