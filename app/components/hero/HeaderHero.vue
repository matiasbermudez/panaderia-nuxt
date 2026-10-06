<script setup lang="ts">
import { navBarLinks } from "~/utils/constants"
import BotonCarrito from './BotonCarrito.vue';
  console.log(navBarLinks)
</script>


<template>
   <Header class="relative flex items-center px-6 py-3  ">

        <img src="/logo-header.png" alt="Logo" class="w-[200px] img-header " />

        <ul class="absolute left-1/2 -translate-x-1/2 flex gap-12 text-lg font-semibold text-white ">

            <li v-for="link in navBarLinks" :key="link.name" class="navlinks-header">
                <NuxtLink :href="link.href">{{ link.name }}</NuxtLink>
            </li>

        </ul>
        <BotonCarrito class="absolute right-0 -translate-x-1/3"/>
   </Header>
</template>

