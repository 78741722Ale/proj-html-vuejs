<template>
    <!-- Services -->
    <div :class="serv_pos_cont">
        <span class="pb-2"><strong class="text-uppercase rec_title">{{serv_post_title}}</strong></span>
        <!-- Lista di Recent Post -->
        <ul class="serv_lists ps-0">
            <li v-for="(element, index) in serv_post_elements" :key="index"><font-awesome-icon class="pe-1" :icon="element.icon" />{{element.text}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"ServiceFooter",
    data() {
        return {
            /* Classi dinamiche */
            serv_pos_cont : "col-3 ps-3 pt-3 d-flex justify-content-center align-items-start flex-column p-0 h-100",
            /* Contenuto Dinamico */
            serv_post_title : "Services",
            serv_post_elements : [
                /* Small.. */
                {
                    icon : "fa-solid fa-chevron-right",
                    text : "Small Business Loan Services"
                },
                /* Credit.. */
                {
                    icon : "fa-solid fa-chevron-right",
                    text : "Credit Rating Advice Services"
                }, 
                /* Crowd.. */
                {
                    icon : "fa-solid fa-chevron-right",
                    text : "Crowd Funding Services"
                },                               

            ]
        }
    },
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/footer.scss';
</style>