<script setup lang="ts">
    
        const {data: productosDeApi} = await useFetch('/api/productos');
        console.log(productosDeApi);
    
</script>


<template>
    <div>
        <pre>{{ productosDeApi }}</pre>
    </div>
</template>

