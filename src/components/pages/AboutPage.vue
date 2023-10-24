<template>
    <div class="flex justify-center bg-white sm:p-10 dark:bg-primary-100" id="about">
        <div class="container rounded-md">
            <title-section title="Sobre"></title-section>
            <div class="flex justify-center w-full mt-3">
                <div class="w-full pb-2 md:px-4 md:flex">
                    <!-- Picture and info text -->
                    <div class="p-2 border-b border-b-black md:w-full md:border-r md:border-b-0 md:border-r-black">
                        <div class="flex justify-center">
                            <div class="relative rounded-full container-img-lighbox group">
                                <img src="@/assets/iprofile.png" class="w-[100px] md:w-[150px] rounded-full" alt="">
                                <div
                                    class="absolute top-0 flex-col items-center justify-center hidden w-full h-full rounded-full group-hover:flex bg-gray-rgba">
                                    <button class="px-2 text-black bg-white rounded-lg md:px-4 md:py-2"
                                        @click="showLightBox">
                                        VER FOTO
                                    </button>
                                </div>
                            </div>
                            <vue-easy-lightbox :visible="toggle_lightbox" :imgs="img" :index="0"
                                @hide="closeLightBox"></vue-easy-lightbox>
                        </div>
                        <div class="mt-2">
                            <h1 class="dark:text-zinc-300">
                                <span class="font-bold">Formação:</span>
                                Graduado em Sistemas de Informação - UNINASSAU
                            </h1>
                            <h2 class="dark:text-zinc-300">
                                <span class="font-bold">Inglês:</span>
                                Cursando inglês na Wizard.
                                ({{
                                    (experience_english.years > 0 ? experience_english.years + ' anos e ' : '') +
                                    (experience_english.months + 1) + ' meses'
                                }})
                            </h2>
                        </div>
                    </div>
                    <!-- About me -->
                    <div class="relative p-2 md:p-0 md:pl-2">
                        <div>
                            <p class="text-justify">
                                Olá! <span>{{ welcome_message }}</span>! Me chamo Tiago Alves tenho {{ my_years.years }}
                                anos sou <span class="font-bold">Desenvolvedor Web ‘back-end’</span> com <span
                                    class="font-bold">PHP</span>, tenho <span class="font-bold">{{ experience_time.years }}
                                    anos de experiência</span> no mercado contando com estágios, empregos e 'freelancers'.
                                Nesta curta estrada tive contato com diversas tecnologias, qual informo na seção de <a
                                    href="" class="text-blue-400 underline hover:text-blue-600">habilidades</a>. Destas <a
                                    href="" class="text-blue-400 underline hover:text-blue-600">habilidades</a> minha paixão
                                no ramo ‘back-end’ se encontra no PHP, pois ao contrário do ditado popular: <span
                                    class="italic">"PHP é só CRUD"</span>, sei que ele muito mais que isso. Outras paixão
                                que
                                tenho, saindo do ramo de desenvolvimento,
                                é a lingua inglesa. Aprender a falar fluentemente o <span
                                    class="font-semibold">inglês</span> e tocar
                                meu saxofone, afinal quem não gosta de uma boa música​!? 🎷​🎵
                            </p>
                        </div>
                        <div class="flex justify-end md:absolute md:bottom-px md:right-px">
                            <a href="https://www.linkedin.com/in/tiago-alves-dos-santos-de-oliveira-96699a189/"
                                target="_blank">
                                <img src="@/assets/icons8-linkedin.svg" alt="linkedin">
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=558899484317&text=Ol%C3%A1,%20cheguei%20aqui%20por%20meio%20de%20seu%20portfolio!%20Me%20chamo..."
                                target="_blank">
                                <img src="@/assets/icons8-whatsapp.svg" alt="whatsapp">
                            </a>
                            <a href="https://t.me/TiagoAlves2001" target="_blank">
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
<style scoped></style>
<script>
import Functions from '@/js/functions';
import VueEasyLightbox from 'vue-easy-lightbox';
import Swal from 'sweetalert2';
/* eslint-disable */
export default {
    components: {
        VueEasyLightbox
    },
    data() {
        return {
            welcome_message: Functions.getGoodTimeMessage(),
            experience_time: Functions.dateDifference('2019-03-01'),
            experience_english: Functions.dateDifference('2023-08-31'),
            my_years: Functions.dateDifference('2001-02-02'),
            toggle_lightbox: false,
            img: '',
        }
    },
    methods: {
        showLightBox() {
            Swal.fire({
                title: 'Atenção!',
                icon: 'warning',
                text: 'Realmente deseja ver a foto?​',
                showDenyButton: true,
                confirmButtonText: 'Sim, quero ver!',
                denyButtonText: 'Não, obrigado por avisar! 😮‍💨​',
            }).then((result) => {
                if (result.isConfirmed) {

                    Swal.fire({
                        title: 'Atenção!!!!',
                        icon: 'warning',
                        text: 'Última chance!!! Realmente deseja ver minha foto? 😬​',
                        showDenyButton: true,
                        confirmButtonText: 'Sim, tenho certeza!',
                        denyButtonText: 'Não, agora mudei de idéia! 😮‍💨​',
                    }).then((response) => {
                        if (response.isConfirmed) {
                            this.img = require("@/assets/iprofile.png");
                            this.toggle_lightbox = true;
                        }
                    })

                }
            })
        },
        closeLightBox() {
            this.toggle_lightbox = false;
        }
    }
}
</script>