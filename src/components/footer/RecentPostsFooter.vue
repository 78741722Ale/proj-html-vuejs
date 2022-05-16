<template>
    <!-- Recent Posts -->
    <div :class="rec_pos_cont">
        <span class="pb-2"><strong class="text-uppercase rec_title">{{rec_post_title}}</strong></span>
        <!-- Lista di Recent Post -->
        <ul class="foot_lists ps-0">
            <li v-for="(element, index) in rec_post_elements" :key="index"><font-awesome-icon class="pe-1" :icon="element.icon" />{{element.text}}</li>
        </ul>
    </div>
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
            rec_post_elements : [
                /* When is it.. */
                {
                    icon : "fa-solid fa-chevron-right",
                    text : "When is it the right time to sell your company?"
                },
                /* Personal debt.. */
                {
                    icon : "fa-solid fa-chevron-right",
                    text : "Personal debt or company debt we explore your options"
                }, 
                /* An Interview.. */
                {
                    icon : "fa-solid fa-chevron-right",
                    text : "An Interview with a so-called business angel"
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