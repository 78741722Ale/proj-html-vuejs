<template>
    <!-- /#site_header -->  
    <div id="site_header">
        <!-- navbar goes here v -->
        <div :class="nav_cont">
            <div :class="nav_row">
                <!-- Logo Avada -->
                <div class="col-3 ps-5 h-100 d-flex justify-content-start align-items-center">
                    <img src="@/assets/img/finance_logo_1x.png" alt="Logo Aziendale">
                </div>
                <!-- Navbar -->
                <div class="col-6 h-100 bordo pe-5 flex_cent">
                    <!-- Genera in modo dinamico -->
                    <ul class="navbar_list gap-4">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Packages</li>
                        <li>Insight</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
        <!--Jumbotron goes here v -->
        <div class="container-fluid jumbotron_site">Jumbotron</div>
    </div>
</template>

<script>
export default {
    name: 'SiteHeaderComponent',
    
    data() {
        return {
            /* Classi Dinamiche - Navbar */
            nav_cont: "container-fluid d-flex justify-content-center navbar_site p-0",
            nav_row: "row d-flex justify-content-between align-content-center w-100 h-100 p-0",          
        }
    },
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/header.scss';
</style>