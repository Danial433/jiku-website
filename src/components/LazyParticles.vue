<template>
  <component
    :is="ParticlesComponent"
    v-if="ParticlesComponent"
    id="tsparticles"
    :options="options"
    class="fixed inset-0 -z-10"
  />
</template>

<script setup>
import { shallowRef, onMounted } from "vue";

defineProps({
  options: {
    type: Object,
    required: true
  }
});

const ParticlesComponent = shallowRef(null);

onMounted(async () => {
  const [{ default: Particles }, { loadSlim }] = await Promise.all([
    import("@tsparticles/vue3"),
    import("@tsparticles/slim")
  ]);

  ParticlesComponent.value = Particles;

  // Note: if this does not initialize correctly, we can adjust based on our current particle component.
});
</script>