<script setup lang="ts">
useHead({title: 'Proyectos'})
</script>

<template>
  <Breadcrumb title="Proyectos" :links="[{label:'Inicio',to:'/'}]"/>


  <ContentList path="proyectos">
    <template #default="{list}">
      <section class="container mx-auto">

      </section>

      <section>
        <div class="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center p-4"
               v-for="item in list" :key="item._path">
            <img :src="item.image" :alt="item.title" class="aspect-auto object-cover rounded-lg mb-4">
            <UButton variant="link" :to="item._path" class="text-xl font-semibold mb-2">{{ item.title }}</UButton>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </section>
    </template>
    <template #empty>
      <p>Vacio</p>
    </template>

    <template #not-found>
      <p>No Projects found.</p>
    </template>
  </ContentList>
</template>

<style scoped>

</style>