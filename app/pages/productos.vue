<script setup lang="ts">
import CardProductos from '../components/productos/CardProductos.vue';
import Headerhero from '~/components/hero/HeaderHero.vue';

    
const {data: productosDeApi} = await useFetch('/api/productos/productos');
       
const tipoSeleccionado = ref<string | null>(null);

// Extraer tipos únicos de los productos
const tiposDisponibles = computed(() => {
  if (!productosDeApi.value) return [];
  const tipos = productosDeApi.value.map(p => p.tipo);
  return [...new Set(tipos)]; // elimina duplicados
});

//Filtrar productos por tipo

const productosFiltrados = computed(() => {
  if (!productosDeApi.value) return [];
  if (!tipoSeleccionado.value) return productosDeApi.value;
  return productosDeApi.value.filter(p => p.tipo === tipoSeleccionado.value);
}); 
    
</script>


<template>
    <div>
        <Headerhero />

       
     <!-- Selector de tipo -->
    <div class="flex flex-wrap gap-2 p-4 justify-center">
      <button
        @click="tipoSeleccionado = null"
        :class="[
          'px-4 py-2 rounded-full border transition',
          !tipoSeleccionado
            ? 'bg-black text-white border-black'
            : 'bg-white text-black border-gray-300 hover:bg-gray-100'
        ]"
      >
        Todos
      </button>

      <button
        v-for="tipo in tiposDisponibles"
        :key="tipo"
        @click="tipoSeleccionado = tipo"
        :class="[
          'px-4 py-2 rounded-full border transition capitalize',
          tipoSeleccionado === tipo
            ? 'bg-black text-white border-black'
            : 'bg-white text-black border-gray-300 hover:bg-gray-100'
        ]"
      >
        {{ tipo }}
      </button>
    </div>
        
        <ul class="grid grid-cols-4 gap-4">
            <li v-for="producto in productosFiltrados" :key="producto.id" class="">
                <CardProductos v-bind="producto"/>
            </li>
        </ul>
    </div>
</template>

