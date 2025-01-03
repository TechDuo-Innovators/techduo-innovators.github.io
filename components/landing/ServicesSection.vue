<script setup lang="ts">
const {servicios} = useData()

</script>

<template>
  <section>
    <div class="container mx-auto py-12 px-4 text-center">
      <h2 class="text-4xl font-bold mb-8 text-primary">Nuestros Servicios</h2>
      <p class="text-xl mb-12">Ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades tecnológicas
        y
        de desarrollo. Descubre cómo podemos ayudarte a llevar tu proyecto al siguiente nivel.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="servicio in servicios" class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
          <UIcon :name="servicio.icono" class="h-12 w-12 text-primary"/>
          <h3 class="text-xl font-semibold mb-2">{{ servicio.nombre }}</h3>
          <p class="">{{ servicio.descripcion }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>