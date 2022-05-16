<template>
    <!-- Upper footer goes here v -->
    <div class="container-fluid upper_footer cont_cent">
        <!-- Components -->
        <div class="row w-100 h-100 p-0 flex_cent">
            <!-- Logo Del Footer -->
            <LogoFooter />
            <!-- Recent Posts -->
            <RecentPostsFooter />
            <!-- Services -->
            <ServiceFooter />
            <!-- Latest -->
            <LatestFooter />
        </div>
    </div>
</template>

<script>
/* Import dei componenti, zona Upper Footer */
import LogoFooter from '@/components/footer/LogoFooter.vue'
import RecentPostsFooter from '@/components/footer/RecentPostsFooter.vue'
import ServiceFooter from '@/components/footer/ServiceFooter.vue'
import LatestFooter from '@/components/footer/LatestFooter.vue'


export default {
    name:"UpperFooterComponent",
    /* Components */
    components : {
        LogoFooter,
        RecentPostsFooter,
        ServiceFooter,
        LatestFooter
    }
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/footer.scss';
</style>