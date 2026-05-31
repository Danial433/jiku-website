<template>
  <section
    class="relative"
    v-motion
    :initial="{ opacity: 0, y: -100 }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
      transition: {
        duration: 500,
        type: 'keyframes',
        ease: 'easeOut'
      }
    }"
  >
    <div
      class="bg-[#7ed9ad]/30 rounded-2xl w-full h-full absolute top-0 left-0 -rotate-2"
    ></div>

    <div
      class="rounded-2xl border relative border-[#7ed9ad]/50 bg-[#f4fff9]/85 h-full flex flex-col overflow-hidden shadow-lg backdrop-blur-xl"
    >
      <div class="bg-[#7ed9ad]/60 text-[#1f3329] px-3 py-2">
        <Icon
          v-motion
          :initial="{ scale: 0, rotate: 180 }"
          :visibleOnce="{
            scale: 1,
            rotate: 0,
            transition: {
              type: 'spring',
              stiffness: 250,
              damping: 10,
              mass: 0.5,
              delay: 500
            }
          }"
          :icon="icon || 'mingcute:leaf-fill'"
          class="text-lg inline"
        />

        <span class="float-right font-bold">{{ title || "Jiku Log" }}</span>
      </div>

      <div class="px-3 py-3 h-full bg-[#f4fff9]/80 text-[#1f3329] rounded overflow-hidden relative">
        <Icon
          v-motion
          :initial="{ scale: 0, rotate: 10 }"
          :visibleOnce="{
            scale: 1,
            rotate: 0,
            transition: {
              type: 'spring',
              stiffness: 50,
              damping: 10,
              mass: 0.5,
              delay: 500
            }
          }"
          :icon="icon || 'mingcute:leaf-fill'"
          style="font-size: 12em"
          class="opacity-10 absolute -right-8 -bottom-12 text-[#3f9f73]"
        />

        <div class="z-10 relative">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "icon"]
};
</script>
