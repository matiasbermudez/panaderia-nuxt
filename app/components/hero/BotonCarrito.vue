<script setup lang="ts">

const onClickHeader = () => {
    console.log("Boton de carrito clickeado");
};
const { obtenerCarrito } = useCarrito()
</script>

<template>
 
    <button class="flex items-center gap-2 boton-carrito" @click="onClickHeader">
        <img src="/carrito-compras-boton.png" alt="Carrito" class="w-[1rem] h-[1rem] "/>
        <p>Carrito</p>
        <p>({{ obtenerCarrito().length }})</p>
    </button>

</template>

