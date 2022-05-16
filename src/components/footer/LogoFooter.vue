<template>
    <!-- Avada Finance logo -->
    <!-- Aggiunta modifica tramite props -->
    <div :class="flogo_col">
        <img class="logo_footer ms-5 pt-5"  :src="img" :desc="desc">
    </div> 
</template>

<script>
export default {
    name:"LogoFooter",
    data() {
        return {
            /* Classe dinamica */
            flogo_col:"col-3 d-flex justify-content-start align-items-start h-100",

        }
    },
    /* Props per upperfooter */
    props: {
        /* Tipologia */
        img: String,
        desc: String
    }
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/footer.scss';
</style>