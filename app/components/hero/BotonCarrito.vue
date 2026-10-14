<script setup lang="ts">
import { ref } from 'vue';

const abierto = ref(false);

const onClickVerCarrito = () => {
    abierto.value = !abierto.value;  
};
const { obtenerCarrito } = useCarrito()
console.log(obtenerCarrito());
</script>

<template>
 
    <button class="flex items-center gap-2 boton-carrito" @click="onClickVerCarrito">
        <img src="/carrito-compras-boton.png" alt="Carrito" class="w-[1rem] h-[1rem] "/>
        <p>Carrito</p>
        <p>({{ obtenerCarrito().length }})</p>
    </button>
    <div v-if="abierto" class="carrito-dropdown">
        <ul class="flex flex-col gap-2">
            <li v-for="(item, index) in obtenerCarrito()" :key="index" class="flex items-center gap-2">
                <img :src="item.imagen" :alt="item.nombre" class="w-[2rem] h-[2rem]"/>
                <span class="font-bold ml-1">{{ item.cantidad }}</span>
                <span> - </span>
                <span>{{ item.nombre }}</span>
                <span> ${{ item.precio * item.cantidad }}</span>
            </li>
            <li class="font-bold text-verde-principal">Total: ${{ obtenerCarrito().reduce((total, item) => total + item.precio * item.cantidad, 0) }}</li>
        </ul>
        <p v-if="obtenerCarrito().length === 0">El carrito está vacío</p>
    </div>

</template>

