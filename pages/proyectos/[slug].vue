<script setup lang="ts">
</script>

<template>
  <ContentDoc>
    <template v-slot="{doc}">
      <Breadcrumb :title="doc.title"
                  :links="[{label:'Inicio',to:'/'},{label:'Proyectos',to:'/proyectos'}]"
                  :image="doc.image"
      />
      <section>
        <ContentRendererMarkdown class="container py-10 px-4 mx-auto" :value="doc"/>
      </section>
    </template>
    <template #empty>
      <h1>Vacio</h1>
    </template>

    <template #not-found>
      <h1>Not Found</h1>
    </template>
  </ContentDoc>
</template>

<style scoped>

</style>