<template>
    <!-- /#site_header -->  
    <div id="site_header">
        <!-- navbar goes here v -->
        <!-- Da sistemare -->
        <div :class="nav_cont">
            <div :class="nav_row">
                <!-- Logo Avada -->
                <LogoComponent 
                v-for="(element, index) in header_logo_component"
                :key="index"
                :src="element.img"
                :alt= "element.desc"
                />
                <!-- Navbar -->
                <NavbarComponent />
            </div>
        </div>
        <!--Jumbotron -->
        <!-- Da sistemare -->        
        <JumboComponent />
    </div>
</template>

<script>
/* Import dei micro componenti */
import LogoComponent from '@/components/header/LogoComponent.vue' 
import NavbarComponent from '@/components/header/NavbarComponent.vue'
import JumboComponent from '@/components/header/JumboComponent.vue'

export default {
    name: 'SiteHeaderComponent',
    components: {
        LogoComponent,
        NavbarComponent,
        JumboComponent
    },
    
    data() {
        return {
            /* Classi Dinamiche - Navbar */
            nav_cont: "container-fluid d-flex justify-content-center navbar_site p-0",
            nav_row: "row d-flex justify-content-between align-content-center w-100 h-100 p-0", 
            /* Contenuto dinamico dell'header */
            header_logo_component : [
                {
                    img: require("@/assets/img/finance_logo_1x.png"),
                    desc:"Avada Finance"
                }
            ]    
        }
    },
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/header.scss';
</style>