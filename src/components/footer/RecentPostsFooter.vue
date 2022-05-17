<template>
    <!-- Componente List Item da ripeter -->
    <li><font-awesome-icon class="pe-1" :icon="icon" />{{text}}</li>
</template>

<script>
export default {
    name:"RecentPostsFooter",
    /* Props da passare a Upper Foorer */
    props: {
    /* Struttura 
    text = element.text
    icon = element.icon
    */
    text: String,
    icon: String
    }

}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/footer.scss';
</style>