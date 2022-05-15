<template>
        <!--Cloud finance goes here v -->
        <!-- Non ancora concluso - CO -->        
        <div :class="CloudFinance_cont">
            <div :class="CloudFinance_row">
                <!-- Learn more e lorem picsum -->
                <div class="col-6 h-100 flex_cent">
                    <div :class="LearnMore_col_12">
                        <!-- Title -->
                        <h2 class="pb-3 title_cloud">Cloud Base Finance</h2>
                        <!-- Primo lorem -->
                        <p class="pt-2 pb-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Rerum neque officiis earum? Quaerat quisquam at dolores sint eius sunt unde!
                        </p>
                        <!-- Secondo Lorem -->
                        <p class="pb-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Rerum neque officiis earum? Quaerat quisquam at dolores sint eius sunt unde!
                        </p>  
                        <!-- Button learn more -->
                        <button class="btn btn-primary btn_contact"> Learn More</button>
                    </div>
                </div>
                <!-- Immagine grafico -->
                <div :class="Graphic_col_6">
                    <div :class="Graphic_col_12">
                        <img src="@/assets/img/graph-600x457.jpg" alt="Grafico" srcset="">
                    </div>
                </div>
            </div>
        </div>  
</template>

<script>
export default {
    name:'CloudComponent',
    data() {
        return {
            /* Classi Dinamiche */
            CloudFinance_cont: "container cont_cent cloud_finance",
            CloudFinance_row: "row h-100 w-100 p-0 flex_cent",
            LearnMore_col_12 :"col-12 h-75 p-0 cloud_desc d-flex flex-column justify-content-center align-items-start",
            Graphic_col_6 : "col-6 h-100 flex_cent",
            Graphic_col_12 :"col-12 h-75 flex_cent"
        }
    },
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/main.scss';
</style>