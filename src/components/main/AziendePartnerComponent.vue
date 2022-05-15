<template>
        <!--Aziende Partner goes here v (inserisci in modo dinamico) -->
        <!-- Non ancora concluso - CO -->
        <div class="container-fluid partner_site cont_cent">
            <div class="row w-100 h-100 p-0 flex_cent">
                <!-- Loghi dinamici -->    
                <div v-for="(element, index) in partners" :key="index" class="col-2 p-0 h-100 flex_cent">
                    <img :src="(element.img)" :alt="element.name">
                </div>                         
            </div>
        </div>
</template>

<script>
export default {
    name:'AziendePartnerComponent',
    data() {
        return {
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
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/main.scss';
</style>