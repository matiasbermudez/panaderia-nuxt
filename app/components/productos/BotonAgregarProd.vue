<script setup lang="ts">
const props = defineProps<{
  producto: {
    id: number
    nombre: string
    precio: number
    tipo: string
  }
}>()
    
const {agregarAlCarrito , obtenerCarrito} = useCarrito() 
const producto = props.producto
const agregarProducto = () => {
  console.log(producto)
  agregarAlCarrito(producto)
}
</script>


<template>
  <button class="flex items-center gap-2 boton-carrito justify-center" @click="agregarProducto() ">
    <img src="/carrito-compras-boton.png" alt="Carrito" class="w-[1rem] h-[1rem] "/>
    <p>Agregar</p>
  </button>
</template>
