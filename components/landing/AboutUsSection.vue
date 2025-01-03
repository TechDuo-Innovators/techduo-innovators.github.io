<script setup lang="ts">
const iconName = 'i-material-symbols:check-circle-outline'
</script>

<template>
  <section>
    <div class="container mx-auto py-12 px-4">
      <div class="text-center mb-8">
        <h2 class="text-4xl font-bold text-primary">Sobre Nosotros</h2>
        <h3 class="text-xl">Comprometidos con la Excelencia en el Desarrollo de Software, Nuestro Equipo
          de Programadores Fullstack se Dedica a Transformar Ideas en Realidades Digitales Eficaces y Creativas</h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex flex-col justify-center">
          <p class="text-lg mb-4">Somos un equipo dedicado a transformar ideas en soluciones digitales
            efectivas. Con una pasión compartida por la innovación y la excelencia, trabajamos mano a mano para ofrecer
            productos y servicios que superan las expectativas.</p>
          <ul class="list-none list-inside text-lg mb-4">
            <li><UIcon class="text-primary" :name="iconName"/> Enfoque en la calidad y la precisión</li>
            <li><UIcon class="text-primary" :name="iconName"/> Innovación continua y soluciones creativas</li>
            <li><UIcon class="text-primary" :name="iconName"/> Trabajo en equipo y colaboración cercana</li>
            <li><UIcon class="text-primary" :name="iconName"/> Integridad y ética profesional</li>
          </ul>
        </div>

        <div class="flex flex-col justify-center items-center space-y-8">
          <div class="flex flex-col items-center">
            <img src="/images/about-us/foto-pavel.jpg" alt="Foto de Programador 1" class="w-32 h-32 rounded-full mb-4">
            <h3 class="text-xl font-semibold">Pavel Perez</h3>
            <p class="text-base">Fullstack Developer</p>
            <p class="text-sm text-center">Especializado en desarrollo frontend y backend, con una pasión
              por crear interfaces de usuario atractivas y funcionales.</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="/images/about-us/foto-carlos.png" alt="Foto de Programador 2" class="w-32 h-32 rounded-full mb-4">
            <h3 class="text-xl font-semibold">Carlos Gonzalez</h3>
            <p class="text-base">Fullstack Developer</p>
            <p class="text-sm text-center">Con experiencia en bases de datos y arquitectura de software, se
              asegura de que cada proyecto sea escalable y eficiente.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>