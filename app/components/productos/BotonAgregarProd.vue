<script setup lang="ts">

    const onClickHeader = () => {
      console.log("Boton de Agregar productos clickeado");
    };

</script>


<template>
  <button class="flex items-center gap-2 boton-carrito justify-center" @click="onClickHeader ">
    <img src="/carrito-compras-boton.png" alt="Carrito" class="w-[1rem] h-[1rem] "/>
    <p>Agregar</p>
  </button>
</template>
