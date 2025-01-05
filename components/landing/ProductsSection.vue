<script setup lang="ts">
const {proyectos} = useData()
</script>

<template>
  <section>
    <div class="container mx-auto py-12 px-4 text-center">
      <h2 class="text-4xl font-bold mb-8 text-primary">Nuestros Trabajos</h2>
      <p class="text-xl mb-12">Descubre algunos de los proyectos en los que hemos trabajado, demostrando
        nuestra capacidad para ofrecer soluciones de software de alta calidad y adaptadas a las necesidades específicas
        de cada cliente.</p>
      <UCarousel class="w-full" arrows :items="proyectos" v-slot:default="{item}"
                 :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3' }">
        <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg mx-2">
          <img :src="item.image" :alt="item.title" class="aspect-auto object-cover rounded-lg mb-4">
          <UButton variant="link" :to="item._path" class="text-xl font-semibold mb-2">{{ item.title }}</UButton>
          <p>{{ item.description }}</p>
        </div>
      </UCarousel>
    </div>
  </section>

</template>

<style scoped>

</style>