<template>
    <!-- Logo Navbar -->
    <div :class="Logo_cont">
        <img class="logo_head" :src="src" :alt="desc">
    </div>
</template>

<script>
export default {
    name: 'LogoComponent',
    /* Contenuto Dinamico */
    data() {
        return {
            Logo_cont:"col-3 ps-5 h-100 d-flex justify-content-start align-items-center",
        }
    },
    props : {
        /* Tipologia 
            src : search => img
            alt : nominativo in caso di assenza => desc
        */
        src: String,
        alt: String        
    }
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/header.scss';
</style>