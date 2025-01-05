<script setup lang="ts">
const infos = ref<{ title: string, text: string, image: string }[]>([{
  image: '/images/about-us/img-1.jpg',
  title: 'Nuestra Historia',
  text: 'Fundada en 2022, TechDuo Innovators ha pasado de ser una pequeña startup con grandes ideas a un equipo apasionado por el desarrollo de software innovador. Con sede en Cuba, nuestro equipo está compuesto por un grupo de entusiastas desarrolladores, diseñadores y estrategas que comparten la visión de transformar la industria tecnológica. En TechDuo Innovators, creemos en el poder de la colaboración y la creatividad para abordar los desafíos más complejos. Nuestro objetivo es crear soluciones tecnológicas que no solo resuelvan problemas, sino que también impulsen el progreso y la eficiencia en diversas industrias. Desde nuestras primeras líneas de código hasta nuestros lanzamientos más recientes, nos esforzamos por mantenernos a la vanguardia de la innovación tecnológica, siempre con un enfoque en la calidad, la seguridad y la satisfacción del cliente. Cada proyecto que emprendemos es una oportunidad para aprender, crecer y hacer una diferencia significativa en el mundo digital. Únete a nosotros en nuestro viaje para redefinir el futuro de la tecnología.'
}, {
  image: '/images/about-us/img-2.jpg',
  title: 'Nuestra Misión',
  text: 'Estamos comprometidos con la creación de soluciones de software que no solo satisfacen las necesidades de nuestros clientes, sino que también impulsan la eficiencia y la innovación en sus negocios. Nuestra misión es simplificar los desafíos tecnológicos a través de productos intuitivos y de alta calidad, construidos con integridad y dedicación. Trabajamos estrechamente con nuestros clientes para entender sus necesidades únicas y ofrecer soluciones personalizadas que faciliten su crecimiento y éxito. Cada línea de código que escribimos y cada diseño que creamos está impulsado por nuestra pasión por la tecnología y nuestro compromiso con la excelencia. En TechDuo Innovators, no solo vemos los desafíos como obstáculos, sino como oportunidades para innovar y avanzar. Nuestra dedicación a la mejora continua y a la adopción de las últimas tecnologías nos permite ofrecer productos que son tanto funcionales como revolucionarios. Únete a nosotros y descubre cómo podemos ayudarte a transformar tus ideas en realidad'
}, {
  image: '/images/about-us/img-3.jpg',
  title: 'Nuestro Equipo',
  text: 'Nuestro equipo es nuestro mayor recurso. Compuesto por profesionales talentosos y dedicados, cada miembro de TechDuo Innovators aporta una mezcla única de habilidades y experiencias. Desde desarrolladores de software hasta diseñadores UX/UI y gerentes de proyecto, nuestro equipo trabaja incansablemente para asegurar el éxito de cada proyecto. La diversidad de nuestro equipo nos permite abordar los desafíos desde múltiples perspectivas, garantizando soluciones creativas y eficientes. Cada miembro de TechDuo Innovators comparte un compromiso común con la excelencia y la innovación, lo que nos impulsa a superar las expectativas en cada tarea que emprendemos. En TechDuo Innovators, creemos que el poder de la colaboración y el espíritu de equipo son fundamentales para alcanzar nuestros objetivos y los de nuestros clientes. Juntos, transformamos ideas en realidades tangibles y exitosas.'
}])
</script>
<template>

  <section v-for="(info,index) in infos">
    <div class="container mx-auto py-10 px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <NuxtImg class="h-96 aspect-square rounded-lg mx-auto order-last md:order-none" :src="info.image"/>
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