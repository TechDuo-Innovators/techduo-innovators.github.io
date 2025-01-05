<script setup lang="ts">
useHead({title: 'Contactanos'})
definePageMeta({layout: false})
</script>

<template>
  <NuxtLayout name="default" :show-contact-us="false">
    <Breadcrumb title="Contactanos" :links="[{label:'Inicio',to:'/'}]"/>

    <section class="p-10 h-full">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <ContactUsInformation class="mb-10"/>
        <ContactUsGoogleForm class="w-full min-h-[1000px]"/>
      </div>
    </section>

  </NuxtLayout>
</template>

<style scoped>

</style>