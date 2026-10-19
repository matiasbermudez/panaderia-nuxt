<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeaderComp from '../components/hero/HeaderHero.vue'
import NosotrosFoto from '~/components/nosotros/NosotrosFoto.vue'
import NosotrosHistoria from '~/components/nosotros/NosotrosHistoria.vue'

const section = ref(null)
let ctx

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    gsap.from('.nosotros-title', {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section.value,
        start: 'top 80%',
        once: true,
      },
    })

    gsap.from('.nosotros-text', {
      y: 35,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section.value,
        start: 'top 75%',
        once: true,
      },
    })
  }, section.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
   <div>
    <HeaderComp />
  <section ref="section" class="nosotros">
    <span class="eyebrow">NUESTRA HISTORIA</span>

    <h2 class="nosotros-title">
      Hecho con tiempo,<br />
      compartido con amor.
    </h2>

    <div class="nosotros-text">
      <p>
        Creemos que las mejores cosas no se apuran.
        Nacen de una buena masa, ingredientes nobles
        y el aroma del pan recién horneado.
      </p>

      <p>
        Cada mañana encendemos los hornos para
        compartir algo más que pan: pequeños
        momentos que se sienten como en casa.
      </p>
    </div>
  </section>

  <NosotrosFoto />
  <NosotrosHistoria />
   </div>
</template>

<style scoped>
.nosotros {
  padding: 120px 8%;
  background: #f5efe5;
  color: #38271f;
  overflow: hidden;
}

.eyebrow {
  display: block;
  margin-bottom: 28px;
  font-size: 12px;
  letter-spacing: 0.2em;
}

.nosotros-title {
  max-width: 900px;
  font-size: clamp(2.8rem, 7vw, 6.5rem);
  line-height: 0.98;
  letter-spacing: -0.055em;
}

.nosotros-text {
  max-width: 580px;
  margin: 40px 0 0 auto;
  font-size: 1.1rem;
  line-height: 1.9;
}
</style>