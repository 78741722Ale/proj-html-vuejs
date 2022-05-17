<template>
    <!-- Recent Posts -->
        <!-- <span class="pb-2"><strong class="text-uppercase rec_title">{{rec_post_title}}</strong></span> -->
        <!-- Lista di Recent Post -->
        <!-- <div > -->
            <li><font-awesome-icon class="pe-1" :icon="icon" />{{text}}</li>
        <!-- </div> --> 
    <!-- </div> -->
</template>

<script>
export default {
    name:"RecentPostsFooter",
    data() {
        return {
            /* Classi dinamiche */
            rec_pos_cont : "col-3 ps-3 pt-3 d-flex justify-content-center align-items-start flex-column p-0 h-100",
            /* Contenuto Dinamico */
            rec_post_title : "Recent posts",
        }
    },
    props: {
    /* Struttura 
    text = element.text
    icon = element.icon
    */
    text: String,
    icon: String
    }

}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/footer.scss';
</style>