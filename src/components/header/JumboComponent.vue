<template>
    <!-- Jumbotron Container -->
    <div :class="jumbo_cont">
        <!-- Jumbotron Image -->        
        <img :src="jumbo_img" :alt="jumbo_Desc">
        <!-- Jumbotron Title -->
        <h1 class="jumbo_title w-100">Rigth People. Rigth Investments.</h1>
    </div>
</template>

<script>
export default {
    name: 'JumboComponent',
    data() {
        return {
            /* Classe dinamica del jumbotron */
            jumbo_cont: "container-fluid jumbotron_site p-0",
            jumbo_img: require("@/assets/img/home_finance_slider_bg.jpg"),
            jumbo_Desc:"Jumbotron Image"
        }
    },
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/header.scss';
</style>