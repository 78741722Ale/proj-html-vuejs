<template>
    <!-- Componente List Item da ripeter -->
    <li><font-awesome-icon class="pe-1" :icon="icon" />{{text}}</li>
</template>

<script>
export default {
    name:"ServiceFooter",
    /* Props da passare al genitore */
    props : {
    /* Struttura dati 
    icon = element.icon
    text = element.text
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