<script setup lang="ts">
import BotonAgregarProd from './BotonAgregarProd.vue';

interface ProdCard {
    imagen : string,
    id : number,
    nombre : string,
    descripcion : string,
    precio : number,
    tipo : string
}
const producto = defineProps<ProdCard>()
    
</script>

<template>
  <article
  class="m-2 flex h-[26rem] w-full min-w-0 flex-col
         overflow-hidden rounded-xl border border-gray-200 bg-white"
>
  <img
    :src="imagen"
    :alt="nombre"
    class="h-48 w-full shrink-0 object-cover"
  />

  <div class="flex flex-1 flex-col p-4">
    <h3 class="text-lg font-semibold">
      {{ nombre }}
    </h3>

    <p class="mt-2 text-sm text-gray-600">
      {{ descripcion }}
    </p>

    <p class="mt-2 text-sm text-gray-600">
      {{ tipo }}
    </p>
    
    <div class="mt-auto">
      <p class="my-3 font-medium">
        $ {{ precio }}
      </p>

      <BotonAgregarProd
        class="w-full"
        :producto="producto"
      />
    </div>
  </div>
</article>
</template>


