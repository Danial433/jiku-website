<template>
  <section class="relative h-full group">
    <div
      class="bg-[#7ed9ad]/30 rounded-2xl w-full h-full absolute top-0 left-0 -rotate-2 group-hover:-rotate-3 duration-300"
    ></div>

    <div
      class="rounded-2xl border relative border-[#7ed9ad]/50 bg-[#f4fff9]/90 h-full overflow-hidden shadow-lg backdrop-blur-xl text-[#1f3329] group-hover:-translate-y-1 duration-300"
    >
      <div class="p-4 border-b border-[#7ed9ad]/40 bg-[#d7f5e6]/70">
        <div class="flex items-center justify-between gap-2">
          <span class="text-xs font-bold tracking-[0.25em] opacity-70">
            {{ log || "LOG 000" }}
          </span>

          <span
            class="text-xs px-2 py-1 rounded-full border border-[#7ed9ad]/60 bg-white/50 font-bold"
          >
            {{ status || "ARCHIVED" }}
          </span>
        </div>

        <div class="flex items-center gap-3 mt-4">
          <div
            class="w-12 h-12 rounded-2xl bg-[#f4fff9] border border-[#7ed9ad]/50 flex items-center justify-center shadow-sm"
          >
            <Icon :icon="icon" class="text-[#3f9f73] text-3xl" />
          </div>

          <div>
            <h3 class="text-xl font-bold leading-tight">{{ title }}</h3>
            <p class="text-xs opacity-70">{{ type || "Lab Record" }}</p>
          </div>
        </div>
      </div>

      <div class="p-4">
        <p class="opacity-80 text-sm mb-4">
          {{ description }}
        </p>

        <div class="mb-4">
          <div class="flex justify-between text-xs font-bold mb-1 opacity-70">
            <span>Progress</span>
            <span>{{ progress || 50 }}%</span>
          </div>

          <div class="w-full h-2 rounded-full bg-[#d7f5e6] overflow-hidden">
            <div
              class="h-full rounded-full bg-[#3f9f73]"
              :style="{ width: `${progress || 50}%` }"
            ></div>
          </div>
        </div>

        <div class="mb-4">
          <p class="text-xs font-bold uppercase tracking-[0.2em] opacity-60 mb-2">
            Learned
          </p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in technologies"
              :key="tech"
              class="text-xs px-2 py-1 rounded-full bg-[#d7f5e6] border border-[#7ed9ad]/50 text-[#1f3329]"
            >
              {{ tech }}
            </span>
          </div>
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
            View record
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  log: {
    type: String,
    default: ""
  },
  status: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: ""
  },
  progress: {
    type: Number,
    default: 50
  },
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