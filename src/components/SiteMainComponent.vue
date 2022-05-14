<template>
    <!-- /#site_main -->
    <!-- Qui non metto classi interattive per ora altrimenti, lo faccio al refactoring, troppi container -->
    <div id="site_main">
        <!--Aziende Partner goes here v (inserisci in modo dinamico) -->
        <!-- Non ancora concluso -->
        <div class="container-fluid partner_site cont_cent">
            <div class="row w-100 h-100 p-0 flex_cent">
                <!-- 1° logo - Electricity -->
                <div class="col-2 h-100 flex_cent">
                    <img src="@/assets/img/client-logo-7.png" alt="Electricity">
                </div>
                <!-- 2° logo - Event Elevate -->
                <div class="col-2 h-100 flex_cent">
                    <img src="@/assets/img/client-logo-8.png" alt="Event Elevate">
                </div>
                <!-- 3° logo - Bonjour -->
                <div class="col-2 h-100 flex_cent">
                    <img src="@/assets/img/client-logo-9.png" alt="Bonjour">
                </div>
                <!-- 4° logo - Bridge -->
                <div class="col-2 h-100 flex_cent">
                    <img src="@/assets/img/client-logo-5.png" alt="Bridge">
                </div>
                <!-- 5° logo - Guardian -->
                <div class="col-2 h-100 flex_cent">
                    <img src="@/assets/img/client-logo-6.png" alt="Guardian">
                </div> 
                <!-- 6° logo - Electricity -->
                <div class="col-2 h-100 flex_cent">
                    <img src="@/assets/img/client-logo-7.png" alt="Electricity">
                </div>                      
            </div>
        </div>
        <!--Cloud finance goes here v -->
        <div class="container cont_cent cloud_finance">
            <div class="row h-100 w-100 p-0 flex_cent">
                <!-- Learn more e lorem picsum -->
                <div class="col-6 h-75 bordo">
                    <!-- Title -->
                    <h2>Cloud Base Finance</h2>
                    <!-- Primo lorem -->
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Rerum neque officiis earum? Quaerat quisquam at dolores sint eius sunt unde!
                    </p>
                    <!-- Secondo Lorem -->
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Rerum neque officiis earum? Quaerat quisquam at dolores sint eius sunt unde!
                    </p>                    
                </div>
                <!-- Immagine grafico -->
                <div class="col-6 h-75 bordo">

                </div>
            </div>
        </div>        
        <!-- Speciality services goes here v -->
        <!-- Tutto contenuto dinamico le cards sono da estrarre in v-for -->
        <div class="container-fluid spec_services cont_cent">
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