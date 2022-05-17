<template>
    <!-- /#site_header -->  
    <div id="site_header">
        <div :class="nav_cont">
            <div :class="nav_row">
                <!-- Logo Sito -->
                <LogoComponent 
                v-for="(element, index) in header_logo_component"
                :key="index"
                :src="element.img"
                :alt= "element.desc"
                />
                <!-- Navbar - Props -->
                <div :class="navbar_cont">
                    <ul :class="ul_class">
                        <!-- Questo è un list item -->
                        <NavbarComponent 
                        v-for="(element, index) in navbar_services" 
                        :key="index"
                        :rif="element.ref"
                        :type="element.type"
                        />    
                    </ul>
                    <!-- Button -->
                    <button class="btn btn-primary btn_contact">{{btn_text}}</button>
                </div>   
            </div>
        </div>
        <!--Jumbotron -->      
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
            /* Contenuto dinamico dell'Logo Header */
            header_logo_component : [
                {
                    img: require("@/assets/img/finance_logo_1x.png"),
                    desc:"Avada Finance"
                }
            ],
            /* Contenuto dinamico della navbar */
            /* Classi dinamiche */
            navbar_cont:"col-6 h-100 gap-4 d-flex justify-content-end align-items-center",
            ul_class:"navbar_list gap-4 h-100",      
            btn_text:"Contact",
            /* Array di oggetti */
            navbar_services: [
            /* Home  */
            {
            type: "Home",
            ref: "Home"
            },
             /* About  */
            {
            type: "About",
            ref: "About"
            },
            /* Services  */
            {
            type: "Services",
            ref: "Services"
            },
            /* Packages  */
            {
            type: "Packages",
            ref: "Packages"
            },
            /* Insight  */
            {
            type: "Insight",
            ref: "Insight"
            },                    
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/header.scss';
</style>