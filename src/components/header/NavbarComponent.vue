<template>
  <div class="col-6 h-100 gap-5 d-flex justify-content-start align-items-center">
    <!-- Genera in modo dinamico -->
    <ul class="navbar_list gap-5">
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Packages</li>
      <li>Insight</li>
    </ul>
    <!-- Button (da sistemare) -->
    <button class="btn btn-primary">Contact</button>
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