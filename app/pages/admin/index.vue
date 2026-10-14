
<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
const cerrarSesion = async () => {
await $fetch('/api/auth/logout' , {
    method: 'POST'
})
  await navigateTo('/login')
 
}
</script>

<template>
  <main class="min-h-screen bg-stone-100 p-8">
    <div class="flex flex-col gap-8 mx-auto max-w-5xl">
      <h1 class="text-3xl font-bold text-stone-900">
        Panel de administración
      </h1>

      <p class="mt-2 text-stone-600">
        Bienvenido a La Panadería.
      </p>

      <div class="flex flex-col gap-4 sm:flex-row sm:gap-8">
        <article class="rounded-xl bg-white p-6 shadow-sm">
          <h2 class="font-semibold">Productos</h2>
          <p class="mt-2 text-stone-500">
            Gestioná tu catálogo.
          </p>
        </article>

        <article class="rounded-xl bg-white p-6 shadow-sm">
          <h2 class="font-semibold">Pedidos</h2>
          <p class="mt-2 text-stone-500">
            Próximamente.
          </p>
        </article>

        <article class="rounded-xl bg-white p-6 shadow-sm">
          <h2 class="font-semibold">Estadísticas</h2>
          <p class="mt-2 text-stone-500">
            Próximamente.
          </p>
        </article>
      </div>

      <button
        class="mt-8 rounded-lg bg-amber-800 px-5 py-3 text-white"
        @click="cerrarSesion"
      >
        Cerrar sesión
      </button>
      <button
        class="mt-8 rounded-lg bg-amber-800 px-5 py-3 text-white"
        @click="navigateTo('/')"
      >
        Ir al home
      </button>
    </div>
  </main>
</template>
