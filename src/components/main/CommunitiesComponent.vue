<template>
        <!-- Our Communities goes here v - CO  -->       
        <div :class="Comm_cont">
            <div :class="Comm_row">
                <!-- Communities image -->
                <div class="col-5 p-0 h-100">
                    <img :src="Comm_image" :alt="Comm_desc">
                </div>
                <!-- Qui classe in absolute per i dati nell'immagine -->
                <!-- Percentuali (dinamiche) -->
                <div :class="Percentuali">
                    <!-- Percentuali Sopra --> 
                    <div :class="Comm_perc_cols">
                        <!-- Numeri della comunità, superiori-->
                        <div v-for="(element, index) in perc_up" :key="index" :class="Comm_single_cell">
                            <h1 class="mb-0">{{element.dato}}</h1>
                            <span>{{element.desc}}</span>
                        </div>
                    </div>
                    <!-- Percentuali Sotto -->
                    <div :class="Comm_perc_cols">
                        <!-- Numeri della comunità, superiori-->
                        <div v-for="(element, index) in perc_down" :key="index" :class="Comm_single_cell">
                            <h1 class="mb-0">{{element.dato}}</h1>
                            <span>{{element.desc}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
</template>

<script>
export default {
    name:'CommunitiesComponent',
    data() {
        return {
            /* Classi Dinamiche, container e row */
            Comm_cont:"container-fluid communities cont_cent",
            Comm_row:"row w-100 p-0 h-100 flex_cent",            
            /* Classi Dinamiche - Immagine call to action */
            Comm_image : require("@/assets/img/counters-bg-image.jpg"),
            Comm_desc: "counters-bg-image",
            Percentuali : "col-7 p-0 h-100 flex_cent flex-column com_numbers",
            Comm_perc_cols: "col-8 h-25 flex_bet", /* Sono uguali le due col, sopra e sotto hanno la stessa tipologia di classi */
            Comm_single_cell : "col-4 p-0 h-100 flex_cent flex-column",
            /* Dati dinamici, sopra */
            perc_up : [
                /* Succesful Applications */
                {
                    dato:"86%",
                    desc:"Succesful Applications"
                },
                /* Return Of Investment */
                {
                    dato:"94%",
                    desc:"Return Of Investment"
                },                
            ],
            perc_down : [
                /* Applied Solution */
                {
                    dato:"92%",
                    desc:"Applied Solution"
                },
                /* Completely Secure */
                {
                    dato:"100%",
                    desc:"Completely Secure"
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