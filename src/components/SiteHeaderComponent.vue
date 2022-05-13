<template>
    <!-- /#site_header -->  
    <div id="site_header">
        <!-- navbar goes here v -->
        <div class="container navbar_site">
            Navbar
        </div>
        <!--Jumbotron goes here v -->
        <div class="container-fluid jumbotron_site">
            Jumbotron
        </div>
    </div>
</template>

<script>
export default {
    name: 'SiteHeaderComponent'
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/header.scss';
</style>