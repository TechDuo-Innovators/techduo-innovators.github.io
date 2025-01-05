<script setup lang="js">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - TechDuo Innovators` : 'TechDuo Innovators';
  }
})
</script>

<template>
  <NuxtLoadingIndicator/>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
