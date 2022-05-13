<template>
    <!-- /#site_footer -->
    <div id="site_footer">
        <!-- Upper footer goes here v -->
        <div class="container-fluid upper_footer cont_cent">
           <div class="row w-100 h-100 p-0 flex_cent">
               <!-- Avada Finance -->
               <div class="col-3 flex_cent h-100 bordo">Avada Finance</div>
               <!-- Recent Posts -->
               <div class="col-3 flex_cent h-100 bordo">Recent Posts</div>
               <!-- Services -->
               <div class="col-3 flex_cent h-100 bordo">Services</div>
               <!-- Latest -->
               <div class="col-3 flex_cent h-100 bordo">Latest</div>
           </div>
        </div>
        <!-- Under footer goes here v -->
        <div class="container-fluid under_footer cont_cent">
            <div class="row w-100 h-100 d-flex justify-content-between align-items-md-center">    
            <!-- CopyRight Text -->
            <div class="col-4 h-100 bordo">CopyRight Text</div>
            <!-- Partner Icons -->
            <div class="col-2 h-100 bordo">Partner Icons</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SiteFooterComponent'
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/footer.scss';
</style>