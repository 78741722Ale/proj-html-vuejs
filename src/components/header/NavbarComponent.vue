<template>
  <div class="col-6 h-100 gap-4 d-flex justify-content-end align-items-center">
    <!-- Genera in modo dinamico -->
    <ul class="navbar_list gap-4 h-100">
      <li><a href="#">Home</a></li> 
      <li><a href="#">About</a></li> 
      <li><a href="#">Services</a></li>
      <li><a href="#">Packages</a></li>
      <li><a href="#">Insight</a></li>      
    </ul>
    <!-- Button (da sistemare) -->
    <button class="btn btn-primary btn_contact">Contact</button>
  </div>
</template>

<script>
export default {
    name: 'NavbarComponent'
}
</script>

<style lang="scss" scoped>
/* Import del foglio di stile */
@import '@/assets/sass/partials/header.scss';
</style>