<template>
    <div class="flex flex-wrap justify-center p-4 bg-white sm:p-10 dark:bg-primary-100 scroll-lazy" id="contatc">
        <div class="container">
            <title-section title="CONTATO"></title-section>
            <!-- <div class="flex justify-end w-full px-2 py-3 rounded-md bg-slate-200 md:bg-transparent">
                <div class="rounded-md md:bg-slate-200 md:p-3">
                    <a href="https://www.linkedin.com/in/tiago-alves-dos-santos-de-oliveira-96699a189/" target="_blank" class="mr-2 text-2xl text-zinc-600 hover:text-blue-500">
                        <font-awesome-icon icon="fa-brands fa-linkedin" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=558899484317&text=Ol%C3%A1,%20cheguei%20aqui%20por%20meio%20de%20seu%20portfolio!%20Me%20chamo..." target="_blank" class="mr-2 text-2xl text-zinc-600 hover:text-green-500">
                        <font-awesome-icon icon="fa-brands fa-whatsapp" />
                    </a>
                    <a href="https://t.me/TiagoAlves2001" target="_blank" class="mr-2 text-2xl text-zinc-600 hover:text-blue-500">
                        <font-awesome-icon icon="fa-brands fa-telegram" />
                    </a>
                    <a href="https://github.com/Tiago-Alves-dos-Santos" target="_blank" class="mr-2 text-2xl text-zinc-600 hover:text-black">
                        <font-awesome-icon icon="fa-brands fa-github" />
                    </a>
                    <a href="" target="_blank" class="text-2xl text-zinc-600 hover:text-red-500">
                        <font-awesome-icon icon="fa-solid fa-file-pdf" />
                    </a>
                </div>
            </div> -->

            <!-- FORM -->
            <div class="">
                <div class="flex justify-center w-full">
                    <div class="flex flex-col">
                        <div class="mb-2 md:mb-0 min-w-min">
                            <div
                                class="flex justify-end w-full px-2 py-3 rounded-md md:px-0 bg-slate-200 md:bg-transparent">
                                <div class="rounded-md md:bg-slate-200 md:p-3">
                                    <a href="https://www.linkedin.com/in/tiago-alves-dos-santos-de-oliveira-96699a189/"
                                        target="_blank" class="mr-2 text-2xl text-zinc-600 hover:text-blue-500">
                                        <font-awesome-icon icon="fa-brands fa-linkedin" />
                                    </a>
                                    <a href="https://api.whatsapp.com/send?phone=558899484317&text=Ol%C3%A1,%20cheguei%20aqui%20por%20meio%20de%20seu%20portfolio!%20Me%20chamo..."
                                        target="_blank" class="mr-2 text-2xl text-zinc-600 hover:text-green-500">
                                        <font-awesome-icon icon="fa-brands fa-whatsapp" />
                                    </a>
                                    <a href="https://t.me/TiagoAlves2001" target="_blank"
                                        class="mr-2 text-2xl text-zinc-600 hover:text-blue-500">
                                        <font-awesome-icon icon="fa-brands fa-telegram" />
                                    </a>
                                    <a href="https://github.com/Tiago-Alves-dos-Santos" target="_blank"
                                        class="mr-2 text-2xl text-zinc-600 hover:text-black">
                                        <font-awesome-icon icon="fa-brands fa-github" />
                                    </a>
                                    <a href="" target="_blank" class="text-2xl text-zinc-600 hover:text-red-500">
                                        <font-awesome-icon icon="fa-solid fa-file-pdf" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="min-w-min">
                            <form @submit.prevent="sendEmail">
                                <input type="text" placeholder="Nome" id="name"
                                    class="w-full px-1 py-3 mb-2 border border-black rounded-md" v-model="form.name">
                                <input type="text" placeholder="Telefone" id="cellphone"
                                    class="w-full px-1 py-3 mb-2 border border-black rounded-md" v-model="form.cellphone" v-mask-phone.br>
                                <input type="text" placeholder="Assunto" id="subject"
                                    class="w-full px-1 py-3 mb-2 border border-black rounded-md" v-model="form.subject">
                                <textarea cols="30" rows="10" id="message"
                                    class="w-full px-1 py-3 border border-black rounded-md" v-model="form.message"
                                    placeholder="Menssagem"></textarea>
                                <div class="flex justify-end">
                                    <button class="px-3 py-1 mr-0 text-white bg-green-500 rounded-md" type="submit">ENVIAR
                                        EMAIL</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import Swal from 'sweetalert2';
export default {
    data() {
        return {
            form: {
                name: '',
                cellphone:'',
                subject: '',
                message: '',
            }
        }
    },
    methods: {
        sendEmail() {
            const myEmail = 'tiagooliveiraaso2@gmail.com';
            let error = '';
            if (this.form.name.trim() === "") {
                error += "O campo Nome não pode estar vazio";
            }
            if (this.form.cellphone.trim() === "") {
                error += "<br>O campo Telefone não pode estar vazio";
            }else if(this.form.cellphone.length < 16){
                error += "<br>O campo Telefone tem que esta no formato correto: (00) 0 0000-0000";
            }
            if (this.form.subject.trim() === "") {
                error += "<br>O campo Assunto não pode estar vazio";
            }
            if (this.form.message.trim() === "") {
                error += "<br>O campo Mensagem não pode estar vazio";
            }
            if (error) {
                Swal.fire({
                    title: 'Atenção!',
                    icon: 'error',
                    html: error,
                    showDenyButton: false,
                    confirmButtonText: 'OK',
                });
                return;
            }
            //welcome message
            let welcomeMessage = `Olá me chamo: ${this.form.name} e meu celular é ${this.form.cellphone} e quero falar sobre: \n`;
            let subjectEmail = welcomeMessage + this.form.message;
            //send email
            let mailtoLink = "mailto:" + myEmail + "?subject=" + encodeURIComponent(this.form.subject) + "&body=" + encodeURIComponent(subjectEmail);
            window.open(mailtoLink);
        }
    }
}
</script>