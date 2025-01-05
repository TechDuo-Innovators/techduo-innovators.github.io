<script setup lang="ts">
const information = ref<{ title: string, icon: string, data: string[] }[]>([
  {title: 'Telefonos', icon: '', data: ['+53 54266836', '+53 55579761']},
  {title: 'Correo Electronico', icon: '', data: ['perezpavel5426@gmail.com','perezpavel5426@gmail.com']},
])
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-4xl font-bold">Informacion de Contacto</h1>
    <div class="mt-10 grid grid-cols-2 gap-4">
      <div v-for="{title,data,icon} in information" class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
        <h1 class="font-semibold mb-2">{{ title }}</h1>
        <p v-for="i in data" class="font-light">{{ i }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>