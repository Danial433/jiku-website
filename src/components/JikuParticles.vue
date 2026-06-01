<template>
  <div class="particles-layer">
    <component
      :is="'vue-particles'"
      v-if="particlesReady"
      id="jiku-particles"
      :options="options"
    />
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";

const particlesReady = ref(false);

const options = {
  fullScreen: {
    enable: false
  },
  background: {
    color: {
      value: "transparent"
    }
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 80
    },
    color: {
      value: "#ff8fab"
    },
    opacity: {
      value: 0.8
    },
    size: {
      value: {
        min: 8,
        max: 18
      }
    },
    rotate: {
      value: {
        min: 0,
        max: 360
      },
      direction: "random",
      animation: {
        enable: true,
        speed: 5,
        sync: false
      }
    },
    move: {
      enable: true,
      speed: 1,
      direction: "bottom",
      random: true,
      straight: false,
      outModes: {
        default: "out"
      }
    },
    shape: {
      type: "image",
      options: {
        image: [
          {
            src: "/sakura.svg",
            width: 120,
            height: 120
          }
        ]
      }
    }
  },
  detectRetina: true
};

onMounted(async () => {
  const app = getCurrentInstance()?.appContext.app;

  if (!app) return;

  const [{ default: Particles }, { loadSlim }] = await Promise.all([
    import("@tsparticles/vue3"),
    import("@tsparticles/slim")
  ]);

  app.use(Particles, {
    init: async (engine) => {
      await loadSlim(engine);
    }
  });

  particlesReady.value = true;
});
</script>

<style scoped>
.particles-layer {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

#jiku-particles {
  width: 100%;
  height: 100%;
}
</style>