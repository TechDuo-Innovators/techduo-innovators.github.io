<script setup lang="ts">

const images = ref([
  '/projects/decalixto/1.jpg',
  '/projects/familia-velazquez/1.jpg',
  '/projects/vimafoods/1.jpg',
  '/projects/xprobots/1.jpg',
])
</script>

<template>
  <section>
    <div class="h-screen text-white relative" style="background-image: url('/images/hero/background.jpg')">
      <div class="h-full w-full absolute top-0 z-10">
        <div class="container mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
          <div class="flex flex-col justify-center p-4">
            <h1 class="text-4xl font-bold mb-4 text-primary">Transformamos tus Ideas en Soluciones Digitales de Éxito</h1>
            <p class="text-2xl mb-8">Liderando la Innovación en Desarrollo de Software Personalizado para Impulsar tu
              Negocio.</p>
            <div>
              <UButton label="Conctactanos" size="xl"/>
            </div>
          </div>
          <div class="hidden md:flex justify-center items-center">
            <div class="grid grid-cols-2 gap-5">
              <NuxtImg v-for="image in images" placeholder :src="image"
                       class="w-full rounded-lg shadow-lg shadow-white"/>
            </div>
          </div>
        </div>
      </div>
      <div class="h-full w-full bg-black opacity-15 absolute top-0 z-0"></div>
    </div>
  </section>
</template>

<style scoped>

</style>