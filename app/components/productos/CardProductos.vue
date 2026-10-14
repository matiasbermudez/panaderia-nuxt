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
  <article class="w-full min-w-0  rounded-xl border border-gray-200 bg-white m-2">
    <img
      :src="imagen"
      :alt="nombre"
      class="h-48 w-full object-cover"
    />

    <div class="p-4">
      <h3 class="text-lg font-semibold">
        {{ nombre }}
      </h3>

      <p class="mt-2 text-sm text-gray-600">
        {{ descripcion }}
      </p>

      <p class="my-3 font-medium">
       $  {{ precio }}
      </p>

      <BotonAgregarProd class=" w-full " :producto="producto" />
    </div>
  </article>
</template>


