<script setup lang="ts">
import {z} from 'zod'
import type {FormSubmitEvent} from "#ui/types";

const schema = z.object({
  name: z.string().nonempty("Campo requerido"),
  email: z.string().nonempty("Campo requerido").email(),
  message: z.string().nonempty("Campo requerido")
})

const state = ref({
  name: undefined,
  email: undefined,
  message: undefined
})


async function onSubmit(event: FormSubmitEvent<z.output<typeof schema>>) {
  // Do something with event.data
  console.log(event.data)
}

</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-4">Envianos un mensaje</h1>

    <UForm :schema="schema" :state="state" class="border rounded-lg border-gray-200 p-4" @submit="onSubmit">
      <UFormGroup label="Nombre:" name="name">
        <UInput v-model="state.name" size="xl"/>
      </UFormGroup>
      <UFormGroup label="Correo Electronico:" name="email">
        <UInput v-model="state.email" size="xl"/>
      </UFormGroup>
      <UFormGroup label="Mensaje" name="message">
        <UTextarea v-model="state.message" size="xl" />
      </UFormGroup>

      <UButton class="mt-10" type="submit" size="xl" label="Enviar Mensaje"/>
    </UForm>
  </div>
</template>

<style scoped>

</style>