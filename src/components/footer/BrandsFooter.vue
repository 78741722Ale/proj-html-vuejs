<template>
    <!-- Componente da importare in UnderFooter -->
    <li><a :href="rif"><font-awesome-icon :icon="icon"/></a></li>
</template>

<script>
export default {
    name:"BrandsFooter",
    props : {
    /* Struttura dati 
    rif = element.ref
    icon = element.icon
    */
    rif: String,
    icon: String,
    }
}
</script>
