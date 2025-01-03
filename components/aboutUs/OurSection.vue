<script setup lang="ts">
const infos = ref<{ title: string, text: string, image: string }[]>([{
  image: '/images/about-us/foto-pavel.jpg',
  title: 'Nuestra Historia',
  text: 'Fundada en [Año de Fundación], [Nombre de la Empresa] ha crecido de ser una pequeña startup con grandes ideas a una empresa líder en el desarrollo de software innovador.Con sede en [Ubicación], nuestro equipo está compuesto por un grupo de apasionados desarrolladores, diseñadores y estrategas que comparten la visión de transformar la industria tecnológica.'
}, {
  image: '/images/about-us/foto-pavel.jpg',
  title: 'Nuestra Misión',
  text: 'En [Nombre de la Empresa], estamos comprometidos con la creación de soluciones de software que no solo satisfacen las necesidades de nuestros clientes, sino que también impulsan la eficiencia y la innovación en sus negocios. Nuestra misión es simplificar los desafíos tecnológicos a través de productos intuitivos y de alta calidad, construidos con integridad y dedicación'
}, {
  image: '/images/about-us/foto-pavel.jpg',
  title: 'Nuestro Equipo',
  text: 'Nuestro equipo es nuestro mayor recurso. Compuesto por profesionales talentosos y dedicados, cada miembro de [Nombre de la Empresa] aporta una mezcla única de habilidades y experiencias. Desde desarrolladores de software hast diseñadores UX/UI y gerentes de proyecto, nuestro equipo trabaja incansablemente para asegurar el éxito de cada proyecto.'
}])
</script>

<template>

  <section v-for="(info,index) in infos">
    <div class="container mx-auto py-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <NuxtImg class="h-96 aspect-square rounded-lg" :class="{'justify-self-end':index % 2 != 0}" :src="info.image"/>
        <div :class="{'order-first':index % 2 != 0}" class="my-auto">
          <h1 class="text-4xl text-primary font-bold mb-4">{{ info.title }}</h1>
          <p>{{ info.text }}</p>
        </div>
      </div>
    </div>
  </section>


</template>

<style scoped>

</style>