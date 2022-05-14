<template>
        <!-- List cards of Feedback goes here v - CO -->
        <!-- Tutto contenuto dinamico le col sono da estrarre in v-for -->
        <div class="container-fluid cards_feed cont_cent">
            <div class="row flex_cent p-0 h-100 w-100">
                <!-- Event Elevate -->
                <div class="col-3 h-100 p-0 flex_cent flex-column">
                    <!-- Logo Aziendale e testo here -->
                    <!-- Utilizza v-for dinamico -->
                    <div class="col-12 h-75 bordo_feedback p-0 flex_cent flex-column">
                        <!-- Logo -->
                        <div class="col-6 h-25 flex_cent">
                            <img src="@/assets/img/client-logo-4-200x87.png" alt="Event Elevate" srcset="">
                        </div>
                        <!-- Raccomandation -->                         
                        <div class="col-9 h-50 flex_cent">
                            <p>
                                "Avada Finance offers a fantastic service! It is so easy to use and the
                                customer support is the best around. This payment option is my number one
                                choice. I always recommend it."
                            </p>
                        </div>
                    </div>
                    <!-- Citazione goes here -->
                    <!-- Utilizza v-for dinamico -->                    
                    <div class="col-12 h-25 bordo_feedback p-0 flex_cent flex-column">
                        <span class="text-uppercase"><strong>Andre Mendoza</strong></span>
                        <span class="text-uppercase"><strong>Creative Market</strong></span>
                    </div>                    
                </div>
                <!-- Bonjour Cafe -->
                <div class="col-3 h-100 p-0 flex_cent flex-column">
                    <!-- Logo Aziendale e testo here -->
                    <!-- Utilizza v-for dinamico -->
                    <div class="col-12 h-75 bordo_feedback p-0 flex_cent flex-column">
                        <!-- Logo -->
                        <div class="col-6 h-25 flex_cent">
                            <img src="@/assets/img/client-logo-1-1-200x87.png" alt="Event Elevate" srcset="">
                        </div>
                        <!-- Raccomandation -->                         
                        <div class="col-9 h-50 flex_cent">
                            <p>
                                "Avada Finance offers a fantastic service! It is so easy to use and the
                                customer support is the best around. This payment option is my number one
                                choice. I always recommend it."
                            </p>
                        </div>
                    </div>
                    <!-- Citazione goes here -->
                    <!-- Utilizza v-for dinamico -->                    
                    <div class="col-12 h-25 bordo_feedback p-0 flex_cent flex-column">
                        <span class="text-uppercase"><strong>Andre Mendoza</strong></span>
                        <span class="text-uppercase"><strong>Creative Market</strong></span>
                    </div>                    
                </div>
                <!-- Futuristic  -->
                <div class="col-3 h-100 p-0 flex_cent flex-column">
                    <!-- Logo Aziendale e testo here -->
                    <!-- Utilizza v-for dinamico -->
                    <div class="col-12 h-75 bordo_feedback p-0 flex_cent flex-column">
                        <!-- Logo -->
                        <div class="col-6 h-25 flex_cent">
                            <img src="@/assets/img/client-logo-2-200x87.png" alt="Futuristic" srcset="">
                        </div>
                        <!-- Raccomandation -->                         
                        <div class="col-9 h-50 flex_cent">
                            <p>
                                "Avada Finance offers a fantastic service! It is so easy to use and the
                                customer support is the best around. This payment option is my number one
                                choice. I always recommend it."
                            </p>
                        </div>
                    </div>
                    <!-- Citazione goes here -->
                    <!-- Utilizza v-for dinamico -->                    
                    <div class="col-12 h-25 bordo_feedback p-0 flex_cent flex-column">
                        <span class="text-uppercase"><strong>Andre Mendoza</strong></span>
                        <span class="text-uppercase"><strong>Creative Market</strong></span>
                    </div>                    
                </div>
                <!-- Electricity -->
                <div class="col-3 h-100 p-0 flex_cent flex-column">
                    <!-- Logo Aziendale e testo here -->
                    <!-- Utilizza v-for dinamico -->
                    <div class="col-12 h-75 bordo_feedback p-0 flex_cent flex-column">
                        <!-- Logo -->
                        <div class="col-6 h-25 flex_cent">
                            <img src="@/assets/img/client-logo-3-200x87.png" alt="Electricity" srcset="">
                        </div>
                        <!-- Raccomandation -->                         
                        <div class="col-9 h-50 flex_cent">
                            <p>
                                "Avada Finance offers a fantastic service! It is so easy to use and the
                                customer support is the best around. This payment option is my number one
                                choice. I always recommend it."
                            </p>
                        </div>
                    </div>
                    <!-- Citazione goes here -->
                    <!-- Utilizza v-for dinamico -->                    
                    <div class="col-12 h-25 bordo_feedback p-0 flex_cent flex-column">
                        <span class="text-uppercase"><strong>Andre Mendoza</strong></span>
                        <span class="text-uppercase"><strong>Creative Market</strong></span>
                    </div>                    
                </div>
            </div>
        </div>   
</template>

<script>
export default {
    name:'ListOfFeedbackComponent'
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/main.scss';
</style>