<script setup lang="ts">
import {useDark} from "@vueuse/core";

const isOpen = ref(false)
const darkMode = useDark()

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

const links = [
  {
    label: 'Inicio',
    to: '/'
  }, {
    label: 'Sobre Nosotros',
    to: '/sobre-nosotros'
  },
  {
    label: 'Contactanos',
    to: '/contactanos'
  },
  {
    label: 'Proyectos',
    to: '/proyectos'
  }
]


</script>

<template>


  <nav class="bg-white border-gray-200 dark:bg-gray-900 z-50 sticky top-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <NuxtImg class="h-8" src="favicon.png"/>
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TechDuo Innovators</span>
      </NuxtLink>
      <button @click="toggleMenu" type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div class="w-full md:block md:w-auto" :class="{'hidden':!isOpen}">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li v-for="link in links" :key="link.to">
            <NuxtLink :to="link.to"

                      class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      active-class="text-white bg-green-700 md:bg-transparent md:text-green-700 md:p-0 dark:text-white md:dark:text-green-500">
              {{ link.label }}
            </NuxtLink>
          </li>
          <UToggle
              v-model="darkMode"
              on-icon="i-heroicons-moon"
              off-icon="i-heroicons-sun"
          />
        </ul>
      </div>
    </div>
  </nav>


</template>

