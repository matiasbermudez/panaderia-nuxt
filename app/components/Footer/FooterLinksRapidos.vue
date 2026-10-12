<script setup lang="ts">
   import {navBarLinks} from '../../utils/constants'
</script>
<template>
    <div class="flex flex-col w-[14rem] h-full justify-between text-white font-semibold text-small">
        <h2 class="text-h3 font-semibold">Links Rápidos</h2>
        <ul class="flex flex-col gap-8">
            <li v-for="link in navBarLinks" :key="link.href" class="cursor-pointer hover:underline hover:text-gray-300">
                <a :href="link.href">{{ link.name }}</a>
            </li>
        </ul>
    </div>
</template>

