<template>
  <div class="col-6 h-100 gap-4 d-flex justify-content-end align-items-center">
    <!-- Genera in modo dinamico -->
    <ul class="navbar_list gap-4 h-100">
      <!-- Componente dinamico -->
      <li v-for="(element, index) in navbar_services" :key="index"><a :href="element.ref">{{element.type}}</a></li>        
    </ul>
    <!-- Button (da sistemare) -->
    <button class="btn btn-primary btn_contact">Contact</button>
  </div>
</template>

<script>
export default {
    name: 'NavbarComponent',
    /* Componenti lista non ordinata  */
    data() {
      return {
        navbar_services: [
          /* Home  */
          {
            type: "Home",
            ref: "Home"
          },
          /* About  */
          {
            type: "About",
            ref: "About"
          },
          /* Services  */
          {
            type: "Services",
            ref: "Services"
          },
          /* Packages  */
          {
            type: "Packages",
            ref: "Packages"
          },
          /* Insight  */
          {
            type: "Insight",
            ref: "Insight"
          },                    
        ]
      }
    },
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/header.scss';
</style>