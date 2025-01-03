<script setup lang="ts">
const {title, links} = defineProps<{
  title: string,
  links: any[]
}>()

links.push({label: title})
</script>

<template>
  <section class="bg-green-900 dark:bg-green-900">
    <div class="container mx-auto p-10">
      <h1 class="text-4xl text-center font-bold text-white">{{ title }}</h1>
      <div class="flex justify-center mt-10">
        <UBreadcrumb v-bind="$attrs" :links="links" :ui="{
          inactive:'text-white hover:text-primary',
          active:'text-primary'
        }"/>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>