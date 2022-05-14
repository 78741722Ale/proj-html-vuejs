<template>
        <!-- Our Communities goes here v - CO  -->
        <!-- Non ancora concluso (valuta uso dinamico) -->         
        <div class="container-fluid communities cont_cent ">
            <div class="row w-100 p-0 h-100 flex_cent">
                <!-- Call to action -->
                <div class="col-5 p-0 h-100">
                    <img src="@/assets/img/counters-bg-image.jpg" alt="Call to action">
                </div>
                <!-- Percentuali (dinamiche) -->
                <div class="col-7 p-0 h-100 flex_cent flex-column com_numbers">
                    <!-- Percentuali Sopra --> 
                    <!-- Andrebbero fatte dinamiche tramite array di oggetto  -->
                    <div class="col-8 h-25 flex_bet">
                        <!-- Sinistra -->
                        <!-- Queste col - 4 valuta di farle dinamiche in v-for con array di oggetto -->
                        <div class="col-4 p-0 h-100 flex_cent flex-column">
                            <h1 class="mb-0">86%</h1>
                            <span>Successful Applications</span>
                        </div>
                        <!-- Destra -->
                        <div class="col-4 h-100 flex_cent flex-column">
                            <h1 class="mb-0">94%</h1>
                            <span>Return of Investment</span>                            
                        </div>
                    </div>
                    <!-- Percentuali Sotto -->
                    <div class="col-8 h-25 flex_bet">
                        <!-- Sinistra -->
                        <!-- Queste col - 4 valuta di farle dinamiche in v-for con array di oggetto -->
                        <div class="col-4 p-0 h-100 flex_cent flex-column">
                            <h1 class="mb-0">92%</h1>
                            <span>Applied Solution</span>
                        </div>
                        <!-- Destra -->
                        <div class="col-4 h-100 flex_cent flex-column">
                            <h1 class="mb-0">100%</h1>
                            <span>Completely Secure</span>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>  
</template>

<script>
export default {
    name:'CommunitiesComponent'
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/main.scss';
</style>