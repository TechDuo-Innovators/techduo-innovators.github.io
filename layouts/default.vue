<script setup lang="ts">
import Header from "~/components/Header.vue";

const {showContactUs = true} = defineProps<{ showContactUs: boolean }>()
</script>

<template>
  <Header/>
  <div class="main">
    <slot/>
    <ContactSection v-if="showContactUs"/>
  </div>
  <Footer/>
</template>

<style scoped>

</style>