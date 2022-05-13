<template>
    <!-- /#site_header -->  
    <div id="site_header">
        <!-- navbar goes here v -->
        <div :class="nav_cont">
            <div :class="nav_row">
                <!-- Logo Avada -->
                <div class="col-3 h-100 bg-info bordo">Logo</div>
                <!-- Navbar -->
                <div class="col-6 h-100 bg-warning bordo">Navbar</div>
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
            nav_cont: "container d-flex justify-content-center navbar_site p-0",
            nav_row: "row d-flex justify-content-between align-content-center w-100 h-100 bg-danger p-0"
        }
    },



}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/header.scss';
</style>