<template>
  <div id="app">
    <!-- SiteHeaderComponent -->
    <SiteHeaderComponent />
    <!-- SiteMainComponent -->
    <SiteMainComponent />
    <!-- SiteFooterComponent -->
    <SiteFooterComponent />  
  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */
/* Import dei 3 principali componenti */
import SiteHeaderComponent from './components/SiteHeaderComponent.vue'
import SiteMainComponent from './components/SiteMainComponent.vue'
import SiteFooterComponent from './components/SiteFooterComponent.vue'



export default {
  name: 'App',
  components: {
    /* HelloWorld */
    SiteHeaderComponent,
    SiteMainComponent,
    SiteFooterComponent
  }
}
</script>

<style lang="scss">
/* Foglio di stile principale 
racchiude ogni foglio di stile*/
@import '@/assets/sass/style.scss';
</style>
