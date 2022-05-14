<template>
    <!-- /#site_footer -->
    <div id="site_footer">
        <!-- Upper footer goes here v -->
        <div class="container-fluid upper_footer cont_cent">
           <div class="row w-100 h-100 p-0 flex_cent">
               <!-- Avada Finance - Larghezza da sistemare -->
               <div class="col-3 flex_cent h-100">
                   <img src="@/assets/img/finance_logo_footer.png" alt="Avada Finance Logo" srcset="">
               </div>
               <!-- Recent Posts -->
               <div class="col-3 ps-3 d-flex justify-content-center align-items-start flex-column p-0 h-100 bordo">
                   <span class="pb-2"><strong class="text-uppercase">Recent post</strong></span>
                   <!-- Lista di Recent Post -->
                   <ul class="foot_lists ps-0">
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                   </ul>
               </div>
               <!-- Services -->
               <div class="col-3 ps-3 d-flex justify-content-center align-items-start flex-column p-0 h-100 bordo">
                   <span class="pb-2"><strong class="text-uppercase">Services</strong></span>
                   <!-- Lista di Recent Post -->
                   <ul class="foot_lists ps-0">
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                   </ul>                   
               </div>
               <!-- Latest -->
               <!-- Da concludere graficamente con icone -->               
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