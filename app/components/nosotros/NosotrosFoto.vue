
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const section = ref(null)
let ctx

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    // 1. La máscara se abre para revelar la fotografía
    gsap.fromTo(
      '.foto-mask',
      {
        clipPath: 'inset(0 100% 0 0)',
      },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 2,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: section.value,
          start: 'top 75%',
          once: true,
        },
      }
    )

    // 2. La fotografía se desplaza dentro de la máscara
    gsap.fromTo(
      '.foto-parallax',
      {
        yPercent: -8,
        scale: 1.15,
      },
      {
        yPercent: 8,
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: section.value,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    )

    // 3. El texto entra con un pequeño retraso
    gsap.from('.foto-copy > *', {
      y: 35,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section.value,
        start: 'top 70%',
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
  <section ref="section" class="nosotros-foto">
    <div class="foto-layout">
      <div class="foto-mask">
        <img
          class="foto-parallax"
          src="/pan-artesanal.webp"
          alt="Pan artesanal recién horneado sobre una mesa de madera"
        />

        <span class="foto-label">HECHO CADA MAÑANA</span>
      </div>

      <div class="foto-copy">
        <span class="foto-eyebrow">EL ARTE DE LO SIMPLE</span>

        <h2>
          Las cosas buenas
          llevan <em>su tiempo.</em>
        </h2>

        <p>
          Cada masa tiene su ritmo, cada ingrediente su propósito.
          Respetamos los tiempos de fermentación y cuidamos cada
          detalle para que cada pan tenga una historia que contar.
        </p>

        <span class="foto-signature">
          Hecho a mano, todos los días.
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nosotros-foto {
  padding: 110px 8%;
  background: #f5efe5;
  color: #38271f;
  overflow: hidden;
}

.foto-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: clamp(35px, 7vw, 110px);
  max-width: 1400px;
  margin: 0 auto;
}

.foto-mask {
  position: relative;
  height: clamp(400px, 52vw, 680px);
  overflow: hidden;
  background: #d9c4ac;
  clip-path: inset(0);
}

.foto-parallax {
  width: 100%;
  height: 120%;
  position: absolute;
  top: -10%;
  left: 0;
  object-fit: cover;
  will-change: transform;
}

.foto-label {
  position: absolute;
  left: 24px;
  bottom: 24px;
  padding: 12px 16px;
  background: #f5efe5;
  color: #38271f;
  font-size: 10px;
  letter-spacing: 0.16em;
}

.foto-copy {
  max-width: 490px;
}

.foto-eyebrow {
  font-size: 11px;
  letter-spacing: 0.2em;
}

.foto-copy h2 {
  margin: 26px 0;
  font-size: clamp(2.8rem, 5vw, 5.2rem);
  line-height: 1.02;
  letter-spacing: -0.055em;
  font-weight: 500;
}

.foto-copy h2 em {
  font-family: Georgia, serif;
  font-weight: 400;
}

.foto-copy p {
  max-width: 420px;
  font-size: 1rem;
  line-height: 1.9;
  color: #756255;
}

.foto-signature {
  display: block;
  margin-top: 30px;
  font-family: Georgia, serif;
  font-style: italic;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .nosotros-foto {
    padding: 75px 6%;
  }

  .foto-layout {
    grid-template-columns: 1fr;
    gap: 38px;
  }

  .foto-mask {
    height: 430px;
  }

  .foto-copy h2 {
    font-size: clamp(2.7rem, 10vw, 4rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .foto-parallax {
    will-change: auto;
  }
}
</style>
