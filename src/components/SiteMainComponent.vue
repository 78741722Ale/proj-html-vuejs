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
        <!-- Non ancora concluso -->        
        <div class="container cont_cent cloud_finance">
            <div class="row h-100 w-100 p-0 flex_cent">
                <!-- Learn more e lorem picsum -->
                <div class="col-6 h-100 flex_cent">
                    <div class="col-12 h-75 cloud_desc d-flex flex-column justify-content-center align-items-start">
                        <!-- Title -->
                        <h2 class="pb-2">Cloud Base Finance</h2>
                        <!-- Primo lorem -->
                        <p class="pb-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Rerum neque officiis earum? Quaerat quisquam at dolores sint eius sunt unde!
                        </p>
                        <!-- Secondo Lorem -->
                        <p class="pb-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Rerum neque officiis earum? Quaerat quisquam at dolores sint eius sunt unde!
                        </p>  
                        <!-- Button learn more -->
                        <button class="btn btn-primary"> Learn More</button>
                    </div>
                </div>
                <!-- Immagine grafico -->
                <div class="col-6 h-100 flex_cent">
                    <div class="col-12 h-75 flex_cent">
                        <img src="@/assets/img/graph-600x457.jpg" alt="Grafico" srcset="">
                    </div>
                </div>
            </div>
        </div>        
        <!-- Speciality services goes here v -->
        <!-- Tutto contenuto dinamico le cards sono da estrarre in v-for -->
        <div class="container-fluid spec_services cont_cent">
            <div class="row flex_cent h-100 w-100 p-0 flex-wrap">
                <!-- Descrizione delle specialità h-40 -->
                <div class="col-6 h_40 flex_cent flex-column">
                    <!-- titolo -->
                    <h2 class="pb-4">Specialty Services</h2>
                    <!-- Paragrafo -->                   
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos commodi totam autem, 
                        nesciunt deleniti dolorem eos reprehenderit consequatur excepturi ea?
                    </p>
                </div>
                <!-- Card dei servizi -->
                <div class="col-8 gap-5 h_60 flex_cent p-0">
                    <!-- Queste card sono dinamiche v-for --> 
                    <div class="col-3 product_service_card h-75 flex_cent flex-column">
                        <!-- Icona superiore e titolo --> 
                        <div class="col-9 h_30 bordo flex_cent flex-column">
                            <!-- Logo (da font-awesome) -->
                            <div class="col-12 h_60"></div>
                            <!-- Nome prodotto -->                            
                            <div class="col-12 h_40 ">
                                <h3>Lorem ipsum</h3>
                            </div>
                        </div>
                        <!-- lorem ipsum --> 
                        <div class="h_60 col-10 bordo flex_cent">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis velit doloremque tenetur quam deleniti sed at 
                                minus aperiam ipsa qui inventore consectetur,
                            </p>
                        </div>
                        <!-- Bottone learn more -->                    
                        <div class="h_10 w-100 flex_cent">
                            <button class="btn btn-primary w-100">Learn More</button>
                        </div>
                    </div>
                    <!-- Queste card sono dinamiche v-for --> 
                    <div class="col-3 product_service_card h-75 flex_cent flex-column">
                        <!-- Icona superiore e titolo --> 
                        <div class="col-9 h_30 bordo flex_cent flex-column">
                            <!-- Logo (da font-awesome) -->
                            <div class="col-12 h_60"></div>
                            <!-- Nome prodotto -->                            
                            <div class="col-12 h_40 ">
                                <h3>Lorem ipsum</h3>
                            </div>
                        </div>
                        <!-- lorem ipsum --> 
                        <div class="h_60 col-10 bordo flex_cent">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis velit doloremque tenetur quam deleniti sed at 
                                minus aperiam ipsa qui inventore consectetur,
                            </p>
                        </div>
                        <!-- Bottone learn more -->                    
                        <div class="h_10 w-100 flex_cent">
                            <button class="btn btn-primary w-100">Learn More</button>
                        </div>
                    </div>
                    <!-- Queste card sono dinamiche v-for --> 
                    <div class="col-3 product_service_card h-75 flex_cent flex-column">
                        <!-- Icona superiore e titolo --> 
                        <div class="col-9 h_30 bordo flex_cent flex-column">
                            <!-- Logo (da font-awesome) -->
                            <div class="col-12 h_60"></div>
                            <!-- Nome prodotto -->                            
                            <div class="col-12 h_40 ">
                                <h3>Lorem ipsum</h3>
                            </div>
                        </div>
                        <!-- lorem ipsum --> 
                        <div class="h_60 col-10 bordo flex_cent">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis velit doloremque tenetur quam deleniti sed at 
                                minus aperiam ipsa qui inventore consectetur,
                            </p>
                        </div>
                        <!-- Bottone learn more -->                    
                        <div class="h_10 w-100 flex_cent">
                            <button class="btn btn-primary w-100">Learn More</button>
                        </div>
                    </div>

                </div>
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