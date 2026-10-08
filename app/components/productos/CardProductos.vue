<script setup lang="ts">
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
    <article class="productos-card">
        <img :src="producto.imagen" :alt="producto.nombre" />
        <h3>{{ producto.nombre }}</h3>
        <p>{{ producto.descripcion }}</p>
        <span>{{ producto.precio }}</span>
    </article>
</template>

