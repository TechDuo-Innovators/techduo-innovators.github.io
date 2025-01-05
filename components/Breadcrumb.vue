<script setup lang="ts">
const {title, links, image} = defineProps<{
  title: string,
  links: any[],
  image?: string
}>()

links.push({label: title})
</script>

<template>
  <div class="flex bg-green-900 dark:bg-green-900 relative h-64" :style='{backgroundImage:`url("${image}")`}'
       style="background-size: cover;background-attachment: scroll">
    <div v-if="image" class="w-full h-full absolute bg-black opacity-50"/>
    <div class="container mx-auto my-auto z-10">
      <h1 class="text-4xl text-center font-bold text-white">{{ title }}</h1>
      <div class="flex justify-center mt-10">
        <UBreadcrumb v-bind="$attrs" :links="links" :ui="{
          inactive:'text-white hover:text-primary',
          active:'text-primary'
        }"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>