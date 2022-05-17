<template>
    <!-- Componenti dinamici -->
    <li ><a :href="rif">{{type}}</a></li>        
</template>

<script>
export default {
    name: 'NavbarComponent',
    props : {
      /* Struttura Dati 
      rif => element.ref
      type => element.type
      */
      rif: String,
      type: String
    }
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/header.scss';
</style>