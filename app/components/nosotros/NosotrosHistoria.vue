
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const section = ref(null)
let ctx

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    const cards = gsap.utils.toArray('.historia-card')

    // Las tarjetas 2 y 3 empiezan debajo de la primera
    gsap.set(cards.slice(1), {
      yPercent: 110,
    })

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section.value,
        start: 'top top',
        end: '+=200%',
        pin: '.historia-stage',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    })

    // Entra la tarjeta 2 y la primera queda detrás
    timeline
      .to(cards[0], {
        scale: 0.92,
        yPercent: -4,
        duration: 1,
        ease: 'none',
      }, 0)
      .to(cards[1], {
        yPercent: 0,
        duration: 1,
        ease: 'none',
      }, 0)

    // Entra la tarjeta 3
    timeline
      .to(cards[1], {
        scale: 0.92,
        yPercent: -4,
        duration: 1,
        ease: 'none',
      }, 1)
      .to(cards[2], {
        yPercent: 0,
        duration: 1,
        ease: 'none',
      }, 1)
  }, section.value)

  const images = gsap.utils.toArray('.card-image')

images.forEach((image, index) => {
  gsap.to(image, {
    scale: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: section.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
})
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section ref="section" class="historia">
    <div class="historia-heading">
      <span>UN POCO DE NUESTRA HISTORIA</span>
      <h2>Todo tiene su <em>tiempo.</em></h2>
      <p>
        Tres ingredientes que hacen de La Panadería
        algo más que un lugar donde comprar pan.
      </p>
    </div>

    <div class="historia-stage">
      <article class="historia-card card-one">
      <img
        class="card-image"
        src="/encuentro2.webp"
        alt="Harina e ingredientes sobre una mesa"
      />

      <span class="card-number">01 / EL ORIGEN</span>

      <div class="card-content">
        <span class="card-symbol">✳</span>
        <h3>Todo empieza<br />con una idea.</h3>
        <p>
          Una receta familiar, harina sobre la mesa
          y las ganas de compartir algo especial.
        </p>
      </div>

      <span class="card-footer">NUESTRAS RAÍCES</span>
    </article>

      <article class="historia-card card-one">
      <img
        class="card-image"
        src="/encuentro1.webp"
        alt="Harina e ingredientes sobre una mesa"
      />

      <span class="card-number">02 / EL COCINADO</span>

      <div class="card-content">
        <span class="card-symbol">✳</span>
        <h3>Todo empieza<br />con una idea.</h3>
        <p>
          Una receta familiar, harina sobre la mesa
          y las ganas de compartir algo especial.
        </p>
      </div>

      <span class="card-footer">NUESTRAS RAÍCES</span>
    </article>

      <article class="historia-card card-one">
      <img
        class="card-image"
        src="/encuentro.webp"
        alt="Harina e ingredientes sobre una mesa"
      />

      <span class="card-number">01 / EL ORIGEN</span>

      <div class="card-content">
        <span class="card-symbol">✳</span>
        <h3>Todo empieza<br />con una idea.</h3>
        <p>
          Una receta familiar, harina sobre la mesa
          y las ganas de compartir algo especial.
        </p>
      </div>

      <span class="card-footer">NUESTRAS RAÍCES</span>
    </article>
    </div>
  </section>
</template>

<style scoped>
.historia {
  background: #f5efe5;
  color: #38271f;
  padding: 100px 8% 0;
}

.historia-heading {
  max-width: 700px;
  margin: 0 auto 55px;
  text-align: center;
}

.historia-heading > span,
.card-number,
.card-footer {
  font-size: 10px;
  letter-spacing: 0.18em;
}

.historia-heading h2 {
  font-size: clamp(2.8rem, 6vw, 5.5rem);
  letter-spacing: -0.06em;
  line-height: 1;
  font-weight: 500;
  margin: 24px 0;
}

.historia-heading h2 em {
  font-family: Georgia, serif;
  font-weight: 400;
}

.historia-heading p {
  line-height: 1.8;
  color: #756255;
}

.historia-stage {
  height: min(68vh, 650px);
  min-height: 460px;
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.historia-card {
  position: absolute;
  inset: 0;
  border-radius: 8px;
  padding: clamp(22px, 4vw, 55px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  will-change: transform;
}

.card-one {
  background: #e9d6bd;
  z-index: 1;
}

.card-two {
  background: #b58a68;
  color: #fff8ee;
  z-index: 2;
}

.card-three {
  background: #38271f;
  color: #f5efe5;
  z-index: 3;
}

.card-content {
  max-width: 700px;
  margin: auto 0;
}

.card-symbol {
  display: block;
  font-size: 35px;
  margin-bottom: 20px;
}

.card-content h3 {
  font-size: clamp(3rem, 7vw, 6.5rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
  font-weight: 500;
  margin: 0 0 25px;
}

.card-content p {
  max-width: 390px;
  line-height: 1.8;
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
}

.card-footer {
  align-self: flex-end;
}
/* */

.historia-card {
  /* Conservá las propiedades que ya tenés */
  overflow: hidden;
  isolation: isolate;
}

/* Fotografía de fondo */
.card-image {
  position: absolute;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.08);
  transition: transform 0.8s ease;
}

/* Capa oscura para leer bien el texto */
.historia-card::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(
    90deg,
    rgba(35, 22, 15, 0.78) 0%,
    rgba(35, 22, 15, 0.35) 65%,
    rgba(35, 22, 15, 0.12) 100%
  );
}

/* Texto blanco encima de las imágenes */
.historia-card {
  color: #fff8ee;
}

.historia-card .card-content p {
  color: rgba(255, 248, 238, 0.88);
}


@media (max-width: 768px) {
  .historia {
    padding: 75px 6% 0;
  }

  .historia-stage {
    height: 65vh;
    min-height: 440px;
  }

  .historia-card {
    padding: 24px;
  }

  .card-content h3 {
    font-size: clamp(2.8rem, 11vw, 4.5rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .historia-card {
    will-change: auto;
  }
}
</style>
