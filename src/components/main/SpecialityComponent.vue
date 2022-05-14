<template>
        <!-- Speciality services goes here v - CO -->
        <!-- Tutto contenuto dinamico le cards sono da estrarre in v-for -->
        <!-- Non ancora concluso -->        
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
                <div class="col-8 gap-5 h_60 d-flex justify-content-center align-items-start p-0">
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
</template>

<script>
export default {
    name:'SpecialityComponent'
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/main.scss';
</style>