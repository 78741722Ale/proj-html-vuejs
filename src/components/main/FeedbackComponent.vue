<template>
    <!-- Client Feedback -->        
    <div :class="feedback_cont">
        <div :class="feedback_row">
            <h2 :class="feedback_style">Client Feedback</h2>
        </div>        
    </div> 
</template>

<script>
export default {
    name:'FeedbackComponent',
    data() {
        return {
        /* Classi dinamiche */
        feedback_cont: "container-fluid feedback cont_cent",
        feedback_row: "row w-100 h-100 p-0 flex_cent",
        feedback_style: "title_feedback pb-3 w-25",
        }
    },
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/main.scss';
</style>