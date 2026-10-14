<script setup lang="ts">
import BotonCarrito from '~/components/hero/BotonCarrito.vue';
import CardProductos from '../components/productos/CardProductos.vue';

    
       const {data: productosDeApi} = await useFetch('/api/productos/productos');
       
        
    
</script>


<template>
    <div>
        <button @click="$router.push('/')" type="button">Mover el home</button>
        <BotonCarrito/>
        
        <ul class="grid grid-cols-4 gap-4">
            <li v-for="producto in productosDeApi" :key="producto.id" class="">
                <CardProductos v-bind="producto"/>
            </li>
        </ul>
    </div>
</template>

