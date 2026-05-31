<template>
  <div class="py-24 pt-24 px-2 mx-auto max-w-5xl">
    <HeroComp />

    <div id="about" class="py-8 text-center rounded scroll-mt-24">
      <h2 class="text-3xl font-bold text-center">{{ t.home.aboutTitle }}</h2>
      <Separator />
    </div>

    <div class="grid md:grid-cols-2 md:gap-4 w-full gap-12">
      <WindowContainer :title="t.home.aboutCardTitle" class="md:row-span-2" icon="mingcute:code-fill">
        <div class="my-2 mt-4 text-md">
          <h3 class="text-xl mb-2 font-bold max-md:text-center">
            {{ t.home.aboutCardTitle }}
          </h3>

          <p>{{ t.home.about1 }}</p>
          <p class="mt-2">{{ t.home.about2 }}</p>
          <p class="mt-2">{{ t.home.about3 }}</p>
        </div>
      </WindowContainer>

      <WindowContainer :title="t.home.educationTitle" icon="mingcute:book-6-fill">
        <div class="text-center my-2 mb-4">
          <div class="my-2 mt-4 text-md text-left">
            <h3 class="text-xl mb-2 font-bold max-md:text-center">
              {{ t.home.educationTitle }}
            </h3>

            <p>{{ t.home.educationText }}</p>
          </div>

          <a
            href="#skills"
            class="inline-block px-4 py-2 mt-2 bg-primary font-semibold rounded text-[#1f3329]"
          >
            <Icon icon="mingcute:sparkles-2-fill" class="text-xl inline mr-1" />
            <span>{{ t.home.seeSkills }}</span>
          </a>
        </div>
      </WindowContainer>

      <WindowContainer :title="t.home.objectiveTitle" icon="mingcute:target-fill">
        <div class="text-center my-2 mb-4">
          <div class="my-2 mt-4 text-md text-left">
            {{ t.home.objectiveText }}
          </div>

          <a
            href="#projects"
            class="inline-block px-4 py-2 mt-2 bg-primary font-semibold rounded text-[#1f3329]"
          >
            <Icon icon="mingcute:sparkles-2-fill" class="text-xl inline mr-1" />
            <span>{{ t.home.seeProjects }}</span>
          </a>
        </div>
      </WindowContainer>

      <WindowContainer
        id="skills"
        :title="t.home.skillsTitle"
        icon="mingcute:sparkles-2-fill"
        class="md:col-span-2 min-w-0 scroll-mt-24"
      >
        <div class="my-4">
          <div class="grid md:grid-cols-2 gap-4">
            <div
              v-for="interest in t.home.interests"
              :key="interest.title"
              class="rounded-2xl border border-[#7ed9ad]/50 bg-[#f4fff9]/80 p-4 shadow-sm hover:-translate-y-1 duration-300"
            >
              <div class="text-3xl mb-2">{{ interest.emoji }}</div>
              <h3 class="text-xl font-bold mb-2">{{ interest.title }}</h3>
              <p class="opacity-80">{{ interest.text }}</p>
            </div>
          </div>

          <Separator icon="mingcute:code-fill" />

          <div class="mt-8 text-center">
            <h3 class="text-2xl font-bold mb-2">{{ t.home.techTitle }}</h3>
            <p class="opacity-80 mb-4">
              {{ t.home.techText }}
            </p>

            <Vue3Marquee class="rounded overflow-hidden" :duration="25">
              <template v-for="(logo, name) in prog.tech" :key="name">
                <div
                  class="overflow-hidden mx-2 rounded-xl border border-[#7ed9ad]/50 bg-[#f4fff9] px-4 py-2 text-[#1f3329] hover:scale-110 hover:bg-[#7ed9ad] duration-300 shadow-sm"
                >
                  <Icon :icon="'devicon:' + logo" class="text-xl inline mr-2" />
                  <b>{{ name }}</b>
                </div>
              </template>

              <template v-for="tool in tools" :key="tool.name">
                <div
                  class="overflow-hidden mx-2 rounded-xl border border-[#7ed9ad]/50 bg-[#f4fff9] px-4 py-2 text-[#1f3329] hover:scale-110 hover:bg-[#7ed9ad] duration-300 shadow-sm"
                >
                  <Icon :icon="tool.icon" class="text-xl inline mr-2" />
                  <b>{{ tool.name }}</b>
                </div>
              </template>
            </Vue3Marquee>
          </div>
        </div>
      </WindowContainer>
    </div>

    <div id="projects" class="mt-24 mb-16 scroll-mt-24">
      <h2 class="text-3xl font-bold text-center">
        {{ t.home.projectsTitle }}
      </h2>

      <p
        class="text-center opacity-70 max-w-2xl mx-auto mt-3 px-4"
      >
        {{ t.home.projectsSubtitle }}
      </p>

      <Separator />
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
     <ProjectCardComp v-for="project in t.home.projects" :key="project.title" :log="project.log"
        :status="project.status" :type="project.type" :progress="project.progress" :title="project.title"
        :description="project.description" :technologies="project.technologies" :icon="project.icon"
        :github="project.github" />
    </div>
    
  </div>
</template>

<script setup>
import { computed } from "vue";
import WindowContainer from "../components/WindowContainer.vue";
import ProjectCardComp from "../components/ProjectCardComp.vue";
import { Vue3Marquee } from "vue3-marquee";
import HeroComp from "../components/HeroComp.vue";
import { useLanguage } from "@/stores/language";
import { text } from "@/translations/portfolioText";

const { currentLanguage } = useLanguage();

const t = computed(() => text[currentLanguage.value]);

const prog = {
  tech: {
    HTML: "html5",
    CSS: "css3",
    PHP: "php",
    MySQL: "mysql",
    Vue: "vuejs",
    Javascript: "javascript",
    Python: "python",
    Linux: "linux"
  }
};

const tools = [
  { name: "Visual Studio Code", icon: "devicon:vscode" },
  { name: "Git", icon: "devicon:git" },
  { name: "GitHub", icon: "devicon:github" },
  { name: "Cisco Packet Tracer", icon: "mingcute:router-modem-fill" },
  { name: "Wireshark", icon: "mingcute:search-3-fill" },
  { name: "LoRa", icon: "mingcute:signal-fill" },
  { name: "Raspberry Pi", icon: "devicon:raspberrypi" }
];
</script>