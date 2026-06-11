<template>
  <div class="min-h-screen text-text relative overflow-hidden jiku-bg">
    <JikuParticles />
    <EntranceOverlay />
    <BackgroundMusic />

    <NavigationComponent :top="true" />

    <div class="absolute inset-0 pointer-events-none opacity-40">
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl"></div>
      <div class="absolute top-40 right-20 w-96 h-96 bg-white/40 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10">
      <RouterView />
    </div>

    <div class="relative z-10">
      <FooterComp />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import FooterComp from "@/components/FooterComp.vue";
import NavigationComponent from "@/components/NavigationComponent.vue";
import JikuParticles from "@/components/JikuParticles.vue";
import EntranceOverlay from "@/components/EntranceOverlay.vue";
import BackgroundMusic from "../components/BackgroundMusic.vue";
</script>

<style scoped>
.jiku-bg {
  background:
    radial-gradient(circle at 20% 15%, rgba(126, 217, 173, 0.35), transparent 30%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.45), transparent 25%),
    linear-gradient(135deg, #eafff4 0%, #c9f2df 55%, #baf0d5 100%);
}
</style>