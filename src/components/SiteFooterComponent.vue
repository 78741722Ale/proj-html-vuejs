<template>
    <!-- /#site_footer -->
    <div id="site_footer">
        <!-- Upper Footer Component -->
        <UpperFooterComponent />
        <!-- Under Footer Component -->
        <UnderFooterComponent />        
    </div>
</template>

<script>
import UpperFooterComponent from '@/components/footer/UpperFooterComponent.vue' 
import UnderFooterComponent from '@/components/footer/UnderFooterComponent.vue' 


export default {
    name: 'SiteFooterComponent',
    components : {
        UpperFooterComponent,
        UnderFooterComponent
    }
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/footer.scss';
</style>