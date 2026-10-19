<script setup lang="ts">
import FooterImgRedes from './FooterImgRedes.vue'
import FooterLinksRapidos from './FooterLinksRapidos.vue'
import FooterContacto from './FooterContacto.vue'
import FooterSubs from './FooterSubs.vue'
</script>

<template>
    <footer class="h-[30vh] p-10  mt-10">
        <div class="w-full h-full flex justify-between">

            <FooterImgRedes />
            <FooterLinksRapidos />
            <FooterContacto />
            <FooterSubs /> 
        </div>
        





        <div class="flex justify-between mt-5 py-2 items-end  border-t border-gray-200 ">
            <p class="text-gray-500 text-sm">
                &copy; 2024 Panaderia. Todos los derechos reservados.
            </p>


            <div class="flex items-center  text-gray-500 text-sm  gap-5">
                    <a href="https://www.example.com/terminos-y-condiciones" >Terminos y Condiciones</a>
                    <p>|</p>
                    <a href="https://www.example.com/politica-de-privacidad" >Privacidad</a>
            </div>


        </div>
    
    </footer>
</template>

