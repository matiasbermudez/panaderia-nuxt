<script setup lang="ts">
import {productos} from '../../utils/constants.ts'
import CardProductos from './CardProductos.vue';
</script>
<template>
    <div class="productos-main">
        <ul>
            <li v-for="producto in productos">
                <CardProductos v-bind="producto" />
            </li>
        </ul>
    </div>
</template>

