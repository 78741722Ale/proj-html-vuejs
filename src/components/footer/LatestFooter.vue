<template>
    <!-- Latest -->               
    <div :class="latest_cont">
        <div :class="latest_row">
            <!-- Titolo Sezione -->
            <span :class="latest_title_class"><strong class="text-uppercase rec_title">{{latest_title}}</strong></span>
            <!-- Icona Sezione (twitter) -->
            <a :class="latest_icon_class" href="#"><font-awesome-icon :icon="latest_icon_type" /></a>
        </div>
    </div>
</template>

<script>
export default {
    name:"LatestFooter",
    data() {
        return {
            /* Classi Dinamiche */
            latest_cont:"col-3 flex_cent p-0 h-100",
            latest_row:"col-12 p-0 h-75 d-flex flex-column",
            /* Classi contenuto */  
            latest_title : "Latest",
            latest_title_class : "pb-2 ps-3 pt-3 text-start",            
            latest_icon_type : "fa-brands fa-twitter",
            latest_icon_class : "ps-3 pt-2 align-self-start twit"          
        }
    },
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/footer.scss';
</style>