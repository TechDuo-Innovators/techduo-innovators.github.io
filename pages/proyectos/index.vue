<script setup lang="ts">

</script>

<template>
  <Breadcrumb title="Proyectos" :links="[{label:'Inicio',to:'/'}]"/>



  <ContentList path="proyectos">
    <template #default="{list}">
      <div v-for="project in list" :key="project._path">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <NuxtLink :to="project._path">{{project.title}}</NuxtLink>
        <p>{{ project.custom }}</p>
      </div>
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