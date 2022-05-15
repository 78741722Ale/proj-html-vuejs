<template>
        <!-- List cards of Feedback goes here v - CO -->
        <!-- Tutto contenuto dinamico le col sono da estrarre in v-for -->
        <div :class="listOfFeedback_cont">
            <div :class="listOfFeedback_row">
                <!-- Cards - Qua il v-for -->
                <div v-for="(element, index) in raccomandations" :key="index" :class="listOfFeedback_single_dim">
                    <!-- Logo Aziendale e testo here -->
                    <div :class="listOfFeedback_upper_zone">
                        <!-- Logo & Raccomandation -->
                        <div class="col-6 h-25 flex_cent"><img :src="element.logo_part" :alt="element.partner"></div>                        
                        <div class="col-9 h-50 flex_cent"><p class="lofeed_text">{{element.text}}</p></div>
                    </div>
                    <!-- Citazione Aziendale e autore -->                   
                    <div :class="listOfFeedback_under_zone">
                        <span class="text-uppercase lofeed_title"><strong>{{element.author}}</strong></span>
                        <span class="text-uppercase lofeed_role"><strong>{{element.role}}</strong></span>
                    </div>                    
                </div>
            </div>
        </div>   
</template>

<script>
export default {
    name:'ListOfFeedbackComponent',
    data() {
        return {
                /* Classi Dinamiche Vanno Qua v */
                listOfFeedback_cont : "container-fluid cards_feed cont_cent",
                listOfFeedback_row : "row flex_cent p-0 h-100 w-100", 
                /* Classi Dinamiche Singola Card */                
                listOfFeedback_single_dim : "col-3 h-100 p-0 flex_cent flex-column", 
                listOfFeedback_upper_zone :"col-12 h-75 p-0 flex_cent flex-column bordo_feed_up",
                listOfFeedback_under_zone :"col-12 h-25 bordo_feed_down p-0 flex_cent flex-column",                
                /* Array di oggetto per le raccomandazioni */ 
                raccomandations : [
                /* 1° oggetto -  Event Elevate */ 
                {   
                    partner:"Event Elevate",
                    logo_part : require("@/assets/img/client-logo-4-200x87.png"),
                    text: "'Avada Finance offers a fantastic service! It is so easy to use and the customer support is the best around. This payment option is my number one choice. I always recommend it.'",
                    author:"Andre Mendoza",
                    role:"Creative Market"
                },
                /* 2° oggetto - Bonjour Cafe  */ 
                {   
                    partner:"Bonjour Cafe",
                    logo_part : require("@/assets/img/client-logo-1-1-200x87.png"),
                    text: "Avada Finance offers a fantastic service! It is so easy to use and the customer support is the best around. This payment option is my number one choice. I always recommend it.",
                    author:"Andre Mendoza",
                    role:"Creative Market"
                },
                /* 3° oggetto - Futuristic */ 
                {   
                    partner:"Futuristic",
                    logo_part : require("@/assets/img/client-logo-2-200x87.png"),
                    text: "Avada Finance offers a fantastic service! It is so easy to use and the customer support is the best around. This payment option is my number one choice. I always recommend it.",
                    author:"Andre Mendoza",
                    role:"Creative Market"
                },
                /* 4° oggetto - Electricity  */ 
                {   
                    partner:"Electricity",
                    logo_part : require("@/assets/img/client-logo-3-200x87.png"),
                    text: "Avada Finance offers a fantastic service! It is so easy to use and the customer support is the best around. This payment option is my number one choice. I always recommend it.",
                    author:"Andre Mendoza",
                    role:"Creative Market"
                },
            ]           
        }
    },
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/main.scss';
</style>