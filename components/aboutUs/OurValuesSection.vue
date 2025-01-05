<script setup lang="ts">
const subtitle = ref('Lo que distingue a TechDuo Innovators es nuestra pasión por la innovación y nuestro compromiso con la excelencia. Nos esforzamos por entender las necesidades específicas de nuestros clientes y ofrecer soluciones personalizadas que superen sus expectativas. Nuestra cultura de aprendizaje continuo y mejora nos permite adaptarnos rápidamente a las tendencias del mercado y las nuevas tecnologías. En TechDuo Innovators, cada proyecto es una oportunidad para innovar y crecer. Nos enorgullece nuestra capacidad para transformar ideas en soluciones prácticas y efectivas que impulsan a nuestros clientes hacia el éxito. La colaboración estrecha con nuestros clientes nos permite diseñar y desarrollar productos que realmente marcan la diferencia en sus negocios. Nuestra dedicación a la excelencia y nuestra pasión por la tecnología nos inspiran a ser líderes en nuestro campo. En TechDuo Innovators, no solo seguimos las tendencias, sino que las creamos.')
const values = ref<{ title: string, subtitle: string }[]>([
  {
    title: 'Innovación',
    subtitle: 'Nos esforzamos por estar a la vanguardia de la tecnología, adoptando nuevas ideas y enfoques para resolver problemas complejos.'
  },
  {
    title: 'Calidad',
    subtitle: 'Nos comprometemos a entregar productos de software que cumplan con los más altos estándares de calidad y rendimiento.'
  },
  {
    title: 'Colaboración',
    subtitle: 'Creemos en el poder del trabajo en equipo y en la construcción de relaciones sólidas con nuestros clientes y socios.'
  },
  {
    title: 'Transparencia',
    subtitle: 'Valoramos la honestidad y la claridad en todas nuestras interacciones, tanto internas como externas.'
  },
])
</script>

<template>
  <section>
    <div class="container mx-auto py-10 px-4">
      <h1 class="text-4xl text-primary font-bold mb-4 text-center">Lo Que Nos Hace Únicos</h1>
      <p>{{ subtitle }}</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        <div v-for="{title,subtitle} in values"
             class="rounded-lg bg-white dark:bg-gray-900 p-6 shadow-lg">
          <h1 class="text-xl text-center font-semibold mb-2">{{ title }}</h1>
          <p>{{ subtitle }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>