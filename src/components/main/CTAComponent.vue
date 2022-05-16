<template>
        <!-- Call to action -->    
        <div :class="CTA_cont">
            <div v-for="(element, index) in CTA_image" :key="index" :class="CTA_row">
                <!-- Immagine di sfondo call to action -->
                <img  class="rtt_img p-0" :src="element.img" :alt="element.descr">
                <!-- Dati Descrittivi della call to action -->
                <div v-for="(element, index) in CTA_data" :key="index" :class="CTA_class">
                    <!-- Titolo -->
                    <h2 class="pb-2">{{element.title}}</h2>
                    <!-- Paragrafo Lorem -->  
                    <span class="w-75 pb-4">{{element.descr}}</span> 
                    <!-- Button Let's Talk --> 
                    <button class="btn btn-primary btn_contact">{{element.button}}</button>                
                </div>
            </div>
        </div>  
</template>

<script>
export default {
    name:'CTAComponent',
    /* Dati Dinamici */
    data() {
        return {
            /* Classi dinamiche per il container e per la row */
            CTA_cont : "container-fluid flex_cent cta_site p-0",
            CTA_row : "row w-100 h-100 position-relative", 
            CTA_class:"abs col-5 p-0 h-50 text-center CTA_data",  
            /* Dati Dinamici - Immagine */  
            CTA_image : [
                /* Immagine call to action */
                {
                img : require("@/assets/img/ready_to_talk_cta_bg.jpg"),
                descr : "Ready to talk"
                }
            ],
            CTA_data : [
                /* Data da iniettare nella descrizione contenuto */
                {
                    title:"Ready To Talk?",
                    descr:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus tempora et deserunt quidem sed. Animi?",
                    button:"Let's Talk"
                }
            ]       
        }
    },
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/main.scss';
</style>