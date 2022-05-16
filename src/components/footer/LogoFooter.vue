<template>
    <!-- Avada Finance logo -->
    <div :class="flogo_col">
        <img v-for="(element, index) in footer_elements" class="logo_footer pt-5" :key="index" :src="element.img" :alt="element.desc">
    </div> 
</template>

<script>
export default {
    name:"LogoFooter",
    data() {
        return {
        /* Classe dinamica */
        flogo_col:"col-3 d-flex justify-content-center align-items-start h-100",
        footer_elements: [
                {
                img: require("@/assets/img/finance_logo_footer.png"),
                desc: "Avada Finance Logo"
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/footer.scss';
</style>