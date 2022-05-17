<template>
    <!-- Upper footer goes here v -->
    <div :class="upper_cont">
        <!-- Components -->
        <div :class="upper_row">
            <!-- Logo Del Footer -->
            <LogoFooter 
            v-for="(element, index) in footer_logo_elements"
            :key="index"
            :src="element.img"
            :alt= "element.desc"
            />
            <!-- Recent Posts -->
            <div :class="rec_pos_cont">
                <!-- Titolo -->
                <span class="pb-2"><strong class="text-uppercase rec_title">{{rec_post_title}}</strong></span>
                <!-- Lista di Recent Post -->
                <ul class="foot_lists ps-0">
                <RecentPostsFooter 
                    v-for="(element, index) in rec_post_elements" 
                    :key="index"
                    :icon="element.icon"
                    :text="element.text"
                    />
                </ul>
            </div>    
            <!-- Services -->
            <div :class="serv_pos_cont">
                <span class="pb-2"><strong class="text-uppercase rec_title">{{serv_post_title}}</strong></span>
                <!-- Lista di Recent Post -->
                <ul class="serv_lists ps-0">
                    <ServiceFooter 
                    v-for="(element, index) in serv_post_elements" 
                    :key="index"
                    :icon="element.icon"
                    :text="element.text"
                    />
                </ul>
            </div>
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
    },
    data() {
        return {
        /* Classi dinamiche */
        upper_cont: "container-fluid upper_footer cont_cent",
        upper_row:"row w-100 h-100 p-0 flex_cent",
        /* Elemento dinamico di LogoFooter.vue */
        footer_logo_elements: [
                {
                img: require("@/assets/img/finance_logo_footer.png"),
                desc: "Avada Finance Logo"
                }
            ], 
        /* Elementi dinamico di RecentPosts.vue */       
        /* Classi dinamiche */   
        rec_pos_cont : "col-3 ps-3 pt-3 d-flex justify-content-center align-items-start flex-column p-0 h-100",
        rec_post_title : "Recent posts",
        /* Contenuto dinamico */
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

            ],
        /* Elementi dinamici di ServiceFooter.vue */            
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