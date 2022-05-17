<template>
        <!--Aziende Partner  -->
        <div :class="partner_cont">
            <div :class="partner_row">
                <!-- Loghi dinamici -->    
                <div v-for="(element, index) in partners" :key="index" :class="partner_loghi">
                    <img class="loghi_partner" :src="(element.img)" :alt="element.name">
                </div>                         
            </div>
        </div>
</template>

<script>
export default {
    name:'AziendePartnerComponent',
    /* Immagini dinamiche */
    data() {
        return {
            /* Array di oggetto */
            partners: [
                /* Electricity */
                {
                img: require("@/assets/img/client-logo-7.png"),
                name:"Electricity"
                },
                /* Event Elevate */
                {
                img: require("@/assets/img/client-logo-8.png"),
                name:"Event Elevate"
                },
                /* Bonjour */
                {
                img: require("@/assets/img/client-logo-9.png"),
                name:"Bonjour"
                },
                /* Bridge */
                {
                img: require("@/assets/img/client-logo-5.png"),
                name:"Bridge"
                },
                /* Guardian */
                {
                img: require("@/assets/img/client-logo-6.png"),
                name:"Guardian"
                },
                /* Electricity */
                {
                img: require("@/assets/img/client-logo-7.png"),
                name:"Electricity"
                },
            ],
            /* Classi Dinamiche */
            partner_cont:"container-fluid partner_site cont_cent",
            partner_row:"row w-100 h-100 p-0 flex_cent",
            partner_loghi:"col-2 p-0 h-100 flex_cent"
        }
    },
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/main.scss';
</style>