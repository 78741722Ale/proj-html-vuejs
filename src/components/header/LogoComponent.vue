<template>
    <!-- Logo Navbar -->
    <div :class="Logo_cont">
        <img class="logo_head" :src="Logo_img" :alt="Logo_title">
    </div>
</template>

<script>
export default {
    name: 'LogoComponent',
    /* Contenuto Dinamico */
    data() {
        return {
            Logo_cont:"col-3 ps-5 h-100 d-flex justify-content-start align-items-center",
            Logo_img: require("@/assets/img/finance_logo_1x.png"),
            Logo_title:"Avada Finance"
        }
    },
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/header.scss';
</style>