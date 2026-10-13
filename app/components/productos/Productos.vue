<script setup lang="ts">
import CardProductos from './CardProductos.vue';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const {data: productos} = await useFetch('/api/productos/productos');


</script>

<template>
  <div class="productos-main overflow-hidden pb-8 ">
    <VueperSlides
       :visible-slides="5"
  :gap="0"
  :arrows="true"
  :bullets="true"
  :infinite="true"
  autoplay
  :autoplay-timeout="3000"
  :pause-on-hover="true"
      :fixed-height="'440px'"
      :breakpoints="{
        768: {
          visibleSlides: 2,
          slideRatio: 1 / 1.3
        },
        500: {
          visibleSlides: 1,
          slideRatio: 1 / 1.3
        }
      }"
    >
      <VueperSlide
        v-for="producto in productos"
        :key="producto.id"
      >
        <template #content>
            <div class="mx-auto w-full max-w-[20rem]">
                <CardProductos v-bind="producto" />
            </div>
        </template>
      </VueperSlide>
      
    </VueperSlides>
     
  </div>
</template>
