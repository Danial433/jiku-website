<template>
  <section class="relative h-full">
    <div class="bg-[#7ed9ad]/30 rounded-2xl w-full h-full absolute top-0 left-0 -rotate-2"></div>

    <div class="rounded-2xl border relative border-[#7ed9ad]/50 bg-[#f4fff9]/90 h-full overflow-hidden shadow-lg backdrop-blur-xl text-[#1f3329]">
      <div class="relative aspect-video bg-[#d7f5e6]/80 overflow-hidden">
        <Icon
          :icon="icon"
          style="font-size: 10em"
          class="opacity-10 absolute -right-8 -bottom-12 text-[#3f9f73]"
        />

        <img
          v-if="image"
          :src="image"
          :alt="title"
          class="h-full w-full object-cover"
        />

        <div v-else class="h-full w-full flex items-center justify-center">
          <Icon :icon="icon" class="text-[#3f9f73] opacity-80" style="font-size: 5em" />
        </div>
      </div>

      <div class="p-4">
        <h3 class="text-xl font-bold mb-2">{{ title }}</h3>

        <p class="opacity-80 text-sm mb-3">
          {{ description }}
        </p>

        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tech in technologies"
            :key="tech"
            class="text-xs px-2 py-1 rounded-full bg-[#d7f5e6] border border-[#7ed9ad]/50 text-[#1f3329]"
          >
            {{ tech }}
          </span>
        </div>

        <div class="flex flex-wrap gap-2">
          <a
            v-if="github"
            :href="github"
            target="_blank"
            rel="noopener noreferrer"
            class="px-3 py-1 rounded-full bg-[#7ed9ad] text-[#1f3329] font-bold text-sm hover:scale-105 duration-200"
          >
            GitHub
          </a>

          <a
            v-if="link"
            :href="link"
            target="_blank"
            rel="noopener noreferrer"
            class="px-3 py-1 rounded-full border border-[#3f9f73] text-[#3f9f73] font-bold text-sm hover:bg-[#7ed9ad] hover:text-[#1f3329] duration-200"
          >
            Voir plus
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  technologies: {
    type: Array,
    default: () => []
  },
  image: {
    type: String,
    default: ""
  },
  icon: {
    type: String,
    default: "mingcute:code-fill"
  },
  github: {
    type: String,
    default: ""
  },
  link: {
    type: String,
    default: ""
  }
});
</script>