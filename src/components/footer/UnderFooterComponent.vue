<template>
    <!-- Under footer -->
    <div :class="under_cont">
        <div :class="under_row">    
            <!-- CopyRight Text -->
            <div class="col-4 h-100 flex_cent"><span>{{copy_text}}</span></div>
            <!-- Partner Icons -->
            <div class="col-2 h-100 flex_cent">
                <ul :class="list_class">
                <!-- Questo è il list item che si cicla x volte -->
                <BrandsFooter 
                v-for="(element, index) in icons_brand" 
                :key="index"
                :icon = "element.icon"
                :rif= "element.ref"
                /> 
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
/* Import dei componenti, zona Under Footer */
import BrandsFooter from '@/components/footer/BrandsFooter.vue'

export default {
    name:"UnderFooterComponent",
    /* Componente per i brands */
    components : {
        BrandsFooter,
    },
    data() {
        return {
            /* Classi Dinamiche - Copy */
            under_cont : "container-fluid under_footer cont_cent",
            under_row : "row w-100 h-100 d-flex justify-content-between align-items-md-center",
            copy_text : "CopyRight 2022 | Alessandro Pecorilla | All Rights Reserved | Powered by Vue 2.0",
            /* Classi Dinamiche - Lista */
            list_class : "list_brands gap-3 p-0 mb-0 d-flex flex-row",
            /* Contenuto Dinamico, array di oggetti */
            icons_brand : [
                /* Facebook */
                {
                    ref : "https://it-it.facebook.com/",
                    icon : "fa-brands fa-facebook"
                },
                /* twitter */
                {
                    ref : "https://twitter.com/?lang=it",
                    icon : "fa-brands fa-twitter"
                },
                /* youtube */
                {
                    ref : "https://www.youtube.com/",
                    icon : "fa-brands fa-youtube"
                },
                /* instagram */
                {
                    ref : "https://www.instagram.com/",
                    icon : "fa-brands fa-instagram"
                },                
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/footer.scss';
</style>