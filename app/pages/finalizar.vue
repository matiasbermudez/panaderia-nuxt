<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import HeaderHero from '../components/hero/HeaderHero.vue'
const { obtenerCarrito } = useCarrito()
const cart = ref(obtenerCarrito())
const total = computed(() => cart.value.reduce((total, item) => total + item.precio * item.cantidad, 0))
console.log("Finalizar Pedido",cart)

const finalizarPedido = () => {
  // 1. Construir el texto del pedido
  let mensaje = 'Hola, quiero hacer un pedido:%0A%0A' // %0A es salto de línea

  cart.value.forEach(item => {
    mensaje += `- ${item.nombre} x${item.cantidad} = $${item.precio * item.cantidad}%0A`
  })

  mensaje += `%0A*Total: $${cart.value.reduce((total, item) => total + item.precio * item.cantidad, 0)}*`

  // 2. Número de WhatsApp de la tienda (formato internacional, sin +)
  const numeroTienda = '542257617837' // Reemplaza con el tuyo

  // 3. Crear el enlace y abrirlo
  const url = `https://wa.me/${numeroTienda}?text=${mensaje}`
  window.open(url, '_blank')
}
onMounted(() => {
  // Animación de entrada
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.from('.cart-card', {
    y: 40,
    opacity: 0,
    duration: 0.7
  })
    .from('.cart-item', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08
    }, '-=0.4')
    .from('.cart-total', {
      opacity: 0,
      y: 10,
      duration: 0.4
    }, '-=0.2')
    .from('.finalizar-btn', {
      scale: 0.9,
      opacity: 0,
      duration: 0.4,
      ease: 'back.out(1.7)'
    }, '-=0.2')

  // Hover con GSAP en el botón (opcional, complementa Tailwind)
  const btn = document.querySelector('.finalizar-btn')
  if (btn) {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.03, duration: 0.2, ease: 'power2.out' })
    })
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, duration: 0.2, ease: 'power2.out' })
    })
  }
})
</script>
<template>
    <div>
        <HeaderHero />
  <section class="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <!-- Header -->
      <header class="text-center mb-10">
        <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Tu pedido
        </h1>
        <p class="mt-2 text-gray-500">
          Revisá los productos antes de finalizar
        </p>
      </header>

      <!-- Card del carrito -->
      <article class="cart-card bg-white rounded-2xl shadow-xl ring-1 ring-gray-100 overflow-hidden">
        <!-- Lista de productos -->
        <ul class="divide-y divide-gray-100">
          <li
            v-for="(item, index) in cart"
            :key="index"
            class="cart-item flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors"
          >
            <!-- Imagen -->
            <div class="shrink-0">
              <img
                :src="item.imagen"
                :alt="item.nombre"
                class="w-14 h-14 object-cover rounded-xl ring-1 ring-gray-100"
              />
            </div>

            <!-- Info -->
            <div class="flex-1 min-w-0">
              <p class="font-semibold text-gray-900 truncate">{{ item.nombre }}</p>
              <p class="text-sm text-gray-500">
                ${{ item.precio }} c/u
              </p>
            </div>

            <!-- Cantidad -->
            <span class="inline-flex items-center justify-center min-w-[2.25rem] h-9 px-2 rounded-full bg-green-50 text-verde-principal font-bold text-sm">
              x{{ item.cantidad }}
            </span>

            <!-- Subtotal -->
            <span class="font-bold text-gray-900 tabular-nums w-24 text-right">
              ${{ (item.precio * item.cantidad).toLocaleString('es-AR') }}
            </span>
          </li>
        </ul>

        <!-- Total -->
<div class="cart-total flex items-center justify-between px-5 py-5 bg-gradient-to-r from-green-50 to-white border-t border-gray-100">
  <span class="text-lg font-semibold text-gray-700">Total</span>
  <span class="text-2xl font-extrabold text-verde-principal tabular-nums">
    ${{ total.toLocaleString('es-AR') }}
  </span>
</div>

        <!-- Botón -->
        <div class="px-5 pb-5">
          <button
            @click="finalizarPedido"
            :disabled="cart.length === 0"
            class="finalizar-btn w-full flex items-center justify-center gap-2 bg-verde-principal hover:bg-green-700 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-lg shadow-green-500/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Finalizar Pedido
          </button>
        </div>
      </article>
    </div>
  </section>
  </div>
</template>

<style scoped>
.tabular-nums {
  font-variant-numeric: tabular-nums;
}
</style>

