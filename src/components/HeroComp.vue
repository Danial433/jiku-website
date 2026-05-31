<template>
  <section title="Heyya!" class="mx-auto pt-20 pb-16 sm:py-24 max-w-4xl px-4">
    <div class="jiku-card rounded-3xl overflow-hidden">
     <div class="relative h-32 sm:h-40 overflow-hidden bg-[#d7f5e6]">
        <div class="absolute inset-0 bg-[linear-gradient(135deg,#dffaf0_0%,#bdf3d7_45%,#8de0b8_100%)]"></div>

        <div class="absolute -top-10 -right-10 w-48 h-48 bg-white/35 rounded-full blur-3xl"></div>
        <div class="absolute bottom-[-60px] left-[-30px] w-56 h-56 bg-[#7ed9ad]/45 rounded-full blur-3xl"></div>

        <div
          class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,#1f3329_1px,transparent_0)] bg-[length:24px_24px]">
        </div>

        <div class="absolute bottom-4 left-5 text-[#1f3329]">
          <p class="text-xs uppercase tracking-[0.3em] opacity-60">jiku labs</p>
          <p class="text-xl sm:text-2xl font-bold">quiet digital shrine</p>
        </div>

        <div
          class="absolute top-4 right-5 text-sm px-3 py-1 rounded-full bg-white/40 border border-white/50 text-[#1f3329]/70">
          🌸 online
        </div>
      </div>

      <div class="p-6 sm:p-8">
        <div class="flex max-[640px]:flex-col gap-6 items-center">
          <div class="flex-shrink-0">
            <div class="relative">
              <div class="absolute -inset-2 rounded-3xl bg-[#7ed9ad]/40 blur-xl"></div>

              <img
                src="/avatar.png"
                v-motion
                :initial="{ rotate: -8, scale: 0.85, opacity: 0 }"
                :enter="{
                  rotate: 0,
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 750,
                    delay: 200,
                    type: 'keyframes',
                    ease: 'easeOut'
                  }
                }"
                alt="Avatar de Jiku"
                class="relative rounded-3xl w-36 h-36 object-cover border-4 border-white/70 shadow-xl jiku-float"
              />
            </div>
          </div>

          <div class="py-2 text-center sm:text-left">
            <p class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7ed9ad]/30 border border-[#7ed9ad]/50 text-sm text-[#3f9f73] mb-3">
              <span class="w-2 h-2 rounded-full bg-[#3f9f73] animate-pulse"></span>
              sudo make me a coffee ☕
            </p>

            <h1
              class="md:text-2xl text-xl"
              v-motion
              :initial="{ opacity: 0, x: 80 }"
              :enter="{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 750,
                  delay: 400,
                  type: 'keyframes',
                  ease: 'easeInOut'
                }
              }"
            >
              <b class="md:text-5xl text-4xl bg-[#7ed9ad]/30 rounded-2xl px-3 pb-1 text-[#1f3329]">
                {{ t.hero.nickname }}
              </b>
              <small class="block sm:inline opacity-60 italic sm:ml-2 mt-2 sm:mt-0 text-[#1f3329]">
                {{ t.hero.fullName }}
              </small>
            </h1>

            <p class="my-2 mt-5 md:text-lg text-md text-[#1f3329] leading-relaxed">
              <VueTyper
                :text="t.hero.description"
                initial-action="typing"
                :pre-type-delay="500"
                :repeat="0"
                :type-delay="7"
                caret-animation="blink"
              />
            </p>
          </div>
        </div>

        <div class="flex flex-wrap mt-6 gap-2 justify-center">
          <template v-for="(soc, i) in social" :key="soc.name">
            <a
              :href="soc.url"
              target="_blank"
              rel="noopener noreferrer"
              class="px-3 py-2 inline-flex items-center border border-[#7ed9ad]/50 bg-white/50 rounded-full hover:bg-[#7ed9ad]/30 hover:-translate-y-1 duration-200 shadow-sm text-[#1f3329]"
              v-motion
              :initial="{ opacity: 0, y: 60, rotate: 8 }"
              :enter="{
                opacity: 1,
                y: 0,
                rotate: 0,
                transition: {
                  duration: 750,
                  delay: 800 + i * 100,
                  type: 'keyframes',
                  ease: 'easeInOut'
                }
              }"
            >
              <Icon :icon="soc.icon" class="text-xl inline mr-2" />
              <span>{{ soc.name }}</span>
            </a>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import VueTyper from "vue3-typer";
import "vue3-typer/dist/vue-typer.css";
import { computed } from "vue";
import { useLanguage } from "@/stores/language";
import { text } from "@/translations/portfolioText";

const { currentLanguage } = useLanguage();

const t = computed(() => text[currentLanguage.value]);

const social = [
  {
    url: "https://github.com/danial433",
    icon: "logos:github-icon",
    name: "GitHub"
  },
  {
    url: "https://www.linkedin.com/in/danialaqil433/",
    icon: "logos:linkedin-icon",
    name: "LinkedIn"
  },
  {
    url: "mailto:danialaqil433@gmail.com",
    icon: "mingcute:mail-fill",
    name: "Email"
  }
];
</script>

<style>
.vue-typer {
  color: #1f3329 !important;
}

.vue-typer .char,
.vue-typer .char.typed {
  all: unset;
  color: #1f3329 !important;
  animation: in-typing 0.72s;
  position: relative;
  display: inline;
  white-space: pre-wrap;
}

.vue-typer .caret {
  background-color: #1f3329 !important;
}

@keyframes in-typing {
  0% {
    opacity: 0;
    transform: translateY(-10px);
    top: -10px;
  }

  100% {
    top: 0px;
  }
}
</style>