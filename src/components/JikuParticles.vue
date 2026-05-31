<template>
  <div class="particles-layer">
    <vue-particles id="jiku-particles" :options="options" />
  </div>
</template>

<script setup>
const options = {
  fullScreen: {
    enable: false,
  },
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 80,
    },
    color: {
      value: "#ff8fab",
    },
    opacity: {
      value: 0.8,
    },
    size: {
      value: {
        min: 8,
        max: 18,
      },
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      direction: "random",
      animation: {
        enable: true,
        speed: 5,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 1,
      direction: "bottom",
      random: true,
      straight: false,
      outModes: {
        default: "out",
      },
    },
      shape: {
          type: "image",
          options: {
              image: [
                  {
                      src: "/sakura.svg",
                      width: 120,
                      height: 120,
                  },
              ],
          },
      },
  },
  detectRetina: true,
};
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