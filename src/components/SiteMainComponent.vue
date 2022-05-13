<template>
    <!-- /#site_main -->
    <!-- Qui non metto classi interattive per ora altrimenti, lo faccio al refactoring, troppi container -->
    <div id="site_main">
        <!--Aziende Partner goes here v (inserisci in modo dinamico) -->
        <div class="container partner_site cont_cent">
            <div class="row w-100 h-100 bg-warning p-0 flex_cent">
                <!-- 1° logo -->
                <div class="col-2 h-100 bordo bg-info">1° Logo</div>
                <!-- 2° logo -->
                <div class="col-2 h-100 bordo bg-info">2° Logo</div>  
                <!-- 3° logo -->
                <div class="col-2 h-100 bordo bg-info">3° Logo</div>
                <!-- 4° logo -->
                <div class="col-2 h-100 bordo bg-info">4° Logo</div>
                <!-- 5° logo -->
                <div class="col-2 h-100 bordo bg-info">5° Logo</div>  
                <!-- 6° logo -->
                <div class="col-2 h-100 bordo bg-info">6° Logo</div>                       
            </div>
        </div>
        <!--Cloud finance goes here v -->
        <div class="container cont_cent cloud_finance">
            <div class="row h-100 w-100 p-0 bordo flex_cent">
                <!-- Learn more e lorem picsum -->
                <div class="col-6 h-75 bordo">Learn more</div>
                <!-- Immagine grafico -->
                <div class="col-6 h-75 bordo">Immagine grafico</div>
            </div>
        </div>        
        <!-- Speciality services goes here v -->
        <!-- Tutto contenuto dinamico le cards sono da estrarre in v-for -->
        <div class="container spec_services cont_cent">
            <div class="row flex_cent h-100 w-100 p-0 flex-wrap">
                <!-- Descrizione delle specialità h-40 -->
                <div class="col-12 bordo h-50">specialità</div>
                <!-- Card dei servizi -->
                <div class="col-12 bordo h-50">Card dei servizi</div>
            </div>           
        </div>  
        <!-- Our Communities goes here v -->
        <div class="container-fluid communities cont_cent ">
            <div class="row w-100 p-0 h-100 flex_cent">
                <!-- Call to action -->
                <div class="col-5 h-100 bordo">Call to action</div>
                <!-- Percentuali (dinamiche) -->
                <div class="col-7 h-100 bordo">Percentuali</div>
            </div>
        </div>      
        <!-- Client Feedback goes here v -->
        <div class="container-fluid feedback cont_cent">
            <div class="row w-100 h-100 flex_cent bordo">
                Client Feedback
            </div>        
        </div>  
        <!-- List cards of Feedback goes here v -->
        <!-- Tutto contenuto dinamico le col sono da estrarre in v-for -->
        <div class="container-fluid cards_feed cont_cent">
            <div class="row flex_cent h-100 w-100">
                <!-- Event Elevate -->
                <div class="col-3 h-100 bordo flex_cent">Event Elevate</div>
                <!-- Bonjour Cafe -->
                <div class="col-3 h-100 bordo flex_cent">Bonjour Cafe</div>
                <!-- Futuristic  -->
                <div class="col-3 h-100 bordo flex_cent">Futuristic</div>
                <!-- Electricity -->
                <div class="col-3 h-100 bordo flex_cent">Electricity</div>
            </div>
        </div>          
        <!-- Call to action goes here v -->
        <div class="container-fluid cta_site">
            Call to action
        </div>  
    </div>
</template>

<script>
export default {
    name: 'SiteMainComponent',
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/main.scss';
</style>