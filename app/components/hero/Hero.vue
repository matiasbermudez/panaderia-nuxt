<script setup lang="ts">
import HeaderHero from './HeaderHero.vue';
import BotonVerProd from './BotonVerProd.vue';

    
</script>


<template>
    <div class="hero">
        <HeaderHero/>
        <section class="hero__section ">

            <h3 class=" text-h3 text-verde-principal font-semibold ">PAN FRESCO, TODOS LOS DIAS</h3>

            <div class="py-5">
                    <h2 class="text-h1 font-bold h2-hero-section ">El sabor de lo</h2>
                    <h2 class="text-h1 font-bold  h2-hero-section  "><span class=" text-verde-principal">natural</span>, en tu mesa</h2>
            </div>

            <div class="py-5">
                <p class="hero__description  text-texto">Panaderia artesanal con ingredientes de primera</p>
                <p class="text-texto">calidad. Tradicion, sabor y frescura en cada bocado.</p>
            </div>

            <BotonVerProd class="mt-4"/>
        </section>
    </div>
</template>


