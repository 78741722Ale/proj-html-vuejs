<template>
    <!-- Eseguito refactoring dopo valutazione sul contenuto -->
    <!-- Non c'è bisogno di emit o props particolari qua dentro -->    
    <div id="site_main">
        <!-- Components Ufficiali -->
        <!-- Aziende Partner -->
        <AziendePartnerComponent />
        <!-- Cloud finance -->        
        <CloudComponent />
        <!-- Speciality -->
        <SpecialityComponent />  
        <!-- Our Communities -->  
        <CommunitiesComponent />            
        <!-- Client Feedback -->
        <FeedbackComponent />        
        <!-- List of Feedback -->
        <ListOfFeedbackComponent /> 
        <!-- Call To Action --> 
        <CTAComponent />                       
    </div>
</template>

<script>
/* Import dei micro componenti del main */
import AziendePartnerComponent from '@/components/main/AziendePartnerComponent.vue'
import CloudComponent from '@/components/main/CloudComponent.vue'
import SpecialityComponent from '@/components/main/SpecialityComponent.vue'
import CommunitiesComponent from '@/components/main/CommunitiesComponent.vue'
import FeedbackComponent from '@/components/main/FeedbackComponent.vue'
import ListOfFeedbackComponent from '@/components/main/ListOfFeedbackComponent.vue'
import CTAComponent from '@/components/main/CTAComponent.vue'


export default {
    name: 'SiteMainComponent',
    components : {
        AziendePartnerComponent, /* Aziende Partner */
        CloudComponent, /* Cloud finance */
        SpecialityComponent, /*  Speciality */
        CommunitiesComponent, /*  Our Communities */
        FeedbackComponent, /* Client Feedback */
        ListOfFeedbackComponent, /* List of Feedback */
        CTAComponent /* Call To Action  */
    }
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/main.scss';
</style>