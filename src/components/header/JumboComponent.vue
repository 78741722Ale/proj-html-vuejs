<template>
    <!-- Da sistemare -->
    <div :class="jumbo_cont">
        <img src="@/assets/img/home_finance_slider_bg.jpg" alt="Jumbotron">
    </div>
</template>

<script>
export default {
    name: 'JumboComponent',
    data() {
        return {
            /* Classe dinamica del jumbotron */
            jumbo_cont: "container-fluid jumbotron_site p-0"
        }
    },
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/header.scss';
</style>