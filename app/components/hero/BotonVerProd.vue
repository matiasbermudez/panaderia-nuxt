<script setup lang="ts">

    const onClickHeader = () => {
      console.log("Boton de Ver productos clickeado");
    };

</script>


<template>
  <button class="flex items-center gap-2 boton-carrito" @click="onClickHeader">
    <p>Ver Productos →</p>
  </button>
</template>
