<script setup lang="ts">
useHead({title: 'Sobre Nosotros'})

</script>

<template>
  <Breadcrumb title="Sobre Nosotros" :links="[{label:'Inicio',to:'/'}]"/>
  <AboutUsOurSection/>
  <AboutUsOurValuesSection/>
</template>

<style scoped>

</style>