
<script setup lang="ts">
import { ref } from 'vue'
definePageMeta({
  middleware: 'guest',
})

const email = ref('')
const password = ref('')
const error = ref('')


async function onSubmit() {
  error.value = ''

  try {
    await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value,
      },
    })

    await navigateTo('/admin')
  } catch {
    error.value = 'Email o contraseña incorrectos'
  }
}

</script>

<template>
  <main class="min-h-screen flex items-center justify-center p-6">
    <form
      class="w-full max-w-md space-y-5 rounded-2xl bg-white p-8 shadow-lg"
      @submit.prevent="onSubmit"
    >
      <div class="text-center">
        <h1 class="text-3xl font-bold">
          La Panadería
        </h1>

        <p class="mt-2 text-gray-500">
          Ingresá al panel de administración
        </p>
      </div>

      <div>
        <label for="email" class="mb-2 block">
          Email
        </label>

        <input
          id="email"
          v-model="email"
          type="email"
          autocomplete="username"
          class="w-full rounded-lg border p-3"
          placeholder="admin@lapanaderia.com"
          required
        />
      </div>

      <div>
        <label for="password" class="mb-2 block">
          Contraseña
        </label>

        <input
          id="password"
          v-model="password"
          type="password"
          autocomplete="current-password"
          class="w-full rounded-lg border p-3"
          placeholder="Tu contraseña"
          required
        />
      </div>

      <p v-if="error" class="text-red-600">
        {{ error }}
      </p>

      <button
        type="submit"
        class="w-full rounded-lg boton-carrito p-3 font-semibold text-white"
      >
        Iniciar sesión
      </button>
    </form>
  </main>
</template>
