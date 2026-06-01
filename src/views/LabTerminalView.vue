<template>
  <div class="py-24 pt-28 px-2 mx-auto max-w-5xl">
    <section class="jiku-card rounded-3xl overflow-hidden">
      <div class="relative h-36 sm:h-44 overflow-hidden bg-[#d7f5e6]">
        <div
          class="absolute inset-0 bg-[linear-gradient(135deg,#dffaf0_0%,#bdf3d7_45%,#8de0b8_100%)]"
        ></div>

        <div class="absolute -top-10 -right-10 w-48 h-48 bg-white/35 rounded-full blur-3xl"></div>
        <div class="absolute bottom-[-60px] left-[-30px] w-56 h-56 bg-[#7ed9ad]/45 rounded-full blur-3xl"></div>

        <div
          class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,#1f3329_1px,transparent_0)] bg-[length:24px_24px]"
        ></div>

        <div class="absolute bottom-4 left-5 text-[#1f3329]">
          <p class="text-xs uppercase tracking-[0.3em] opacity-60">jiku labs</p>
          <h1 class="text-2xl sm:text-4xl font-bold">Lab Terminal</h1>
          <p class="text-sm opacity-70 mt-1">
            A small space for ideas, projects, and assistant personalities.
          </p>
        </div>
      </div>

      <div class="p-5 sm:p-8 grid lg:grid-cols-[220px_1fr] gap-5">
        <aside class="space-y-4">
          <div class="rounded-2xl border border-[#7ed9ad]/50 bg-[#f4fff9]/80 p-4">
            <h2 class="font-bold text-lg mb-2">Saved Ideas</h2>

            <p v-if="savedIdeas.length === 0" class="text-sm opacity-70">
              No ideas saved yet.
            </p>

            <div v-else class="space-y-1">
              <button
                v-for="idea in savedIdeas"
                :key="idea.id"
                @click="openIdea(idea)"
                type="button"
                class="w-full text-left px-2 py-2 rounded-lg hover:bg-[#d7f5e6]/70 duration-200"
                :class="selectedIdea?.id === idea.id ? 'bg-[#7ed9ad]/20' : ''"
              >
                <div class="flex items-center justify-between gap-2">
                  <div class="min-w-0">
                    <p class="font-bold text-sm truncate">
                      {{ idea.title }}
                    </p>
                    <p class="text-xs opacity-60 truncate"> 
                        saved on {{ new Date(idea.createdAt).toLocaleDateString() }}
                    </p>
                  </div>

                  <Icon icon="mingcute:right-fill" class="text-lg opacity-40 shrink-0" />
                </div>
              </button>
            </div>
          </div>

          <div
            v-if="selectedIdea"
            class="rounded-2xl border border-[#7ed9ad]/50 bg-[#f4fff9]/80 p-4"
          >
            <div class="flex items-start justify-between gap-3 mb-3">
              <div>
                <p class="text-xs uppercase tracking-[0.25em] opacity-50">
                  Idea Record
                </p>

                <h2 class="font-bold text-lg">
                  {{ selectedIdea.title }}
                </h2>
              </div>

              <button
                @click="closeIdea"
                type="button"
                class="w-8 h-8 rounded-full bg-white/70 border border-[#7ed9ad]/40 hover:bg-[#d7f5e6] duration-200"
              >
                ×
              </button>
            </div>


            <div
              class="rounded-xl bg-white/60 border border-[#7ed9ad]/30 p-3 text-sm whitespace-pre-wrap"
            >
              {{ selectedIdea.text }}
            </div>

            <button
              @click="deleteIdea(selectedIdea.id)"
              type="button"
              class="mt-3 px-3 py-2 rounded-xl border border-red-300 text-red-500 text-sm font-bold hover:bg-red-50 duration-200"
            >
              Delete Idea
            </button>
          </div>
        </aside>

        <main class="space-y-4 min-w-0">
          <div
            class="rounded-2xl border border-[#7ed9ad]/50 bg-[#f4fff9]/80 overflow-hidden min-h-[520px] flex flex-col"
          >
            <div
              class="flex items-center justify-between gap-3 p-4 border-b border-[#7ed9ad]/40 bg-[#d7f5e6]/50"
            >
              <div class="flex items-center gap-3 min-w-0">
                <div
                  class="w-11 h-11 rounded-2xl bg-[#d7f5e6] border border-[#7ed9ad]/50 flex items-center justify-center text-2xl shrink-0"
                >
                  {{ currentAssistant.emoji }}
                </div>

                <div class="min-w-0">
                  <p class="font-bold leading-tight">{{ currentAssistant.name }}</p>
                  <p class="text-sm opacity-70 truncate">{{ currentAssistant.title }}</p>
                </div>
              </div>

              <div class="relative shrink-0">
                <button
                  @click="toggleAssistantMenu"
                  type="button"
                  class="px-3 py-2 rounded-xl bg-white/70 border border-[#7ed9ad]/50 hover:bg-[#7ed9ad]/30 duration-200 flex items-center gap-2 font-bold text-sm"
                >
                  <span>{{ currentAssistant.emoji }}</span>
                  <span class="hidden sm:inline">{{ currentAssistant.name }}</span>
                  <Icon
                    icon="mingcute:down-fill"
                    class="duration-200"
                    :class="assistantMenuOpen ? 'rotate-180' : ''"
                  />
                </button>

                <div
                  v-if="assistantMenuOpen"
                  class="absolute right-0 mt-2 z-30 w-60 rounded-2xl border border-[#7ed9ad]/50 bg-[#f4fff9] shadow-xl overflow-hidden"
                >
                  <button
                    v-for="assistant in assistants"
                    :key="assistant.id"
                    @click="selectAssistant(assistant.id)"
                    type="button"
                    class="w-full text-left p-3 hover:bg-[#d7f5e6] duration-200"
                    :class="selectedAssistantId === assistant.id ? 'bg-[#7ed9ad]/30' : ''"
                  >
                    <div class="flex items-center gap-3">
                      <span class="text-2xl">{{ assistant.emoji }}</span>

                      <div>
                        <p class="font-bold">{{ assistant.name }}</p>
                        <p class="text-xs opacity-70">{{ assistant.title }}</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div class="flex-1 p-4 overflow-y-auto space-y-3">
              <div
                v-for="message in messages"
                :key="message.id"
                class="rounded-2xl p-3 border max-w-[85%]"
                :class="
                  message.role === 'user'
                    ? 'bg-[#7ed9ad]/25 border-[#7ed9ad]/50 ml-auto'
                    : 'bg-white/70 border-[#7ed9ad]/30 mr-auto'
                "
              >
                <p class="text-xs uppercase tracking-[0.2em] opacity-50 mb-1">
                  {{ message.role === "user" ? "Jiku" : currentAssistant.name }}
                </p>
                <p>{{ message.text }}</p>
              </div>
            </div>

            <form
              @submit.prevent="sendMessage"
              class="p-4 border-t border-[#7ed9ad]/40 bg-[#f4fff9]/80"
            >
              <div class="flex max-sm:flex-col gap-2">
                <input
                  v-model="chatInput"
                  type="text"
                  placeholder="Type an idea, question, or project thought..."
                  class="w-full rounded-xl border border-[#7ed9ad]/50 bg-white/70 px-4 py-2 outline-none focus:border-[#3f9f73]"
                />

                <button
                  type="submit"
                  class="px-4 py-2 rounded-xl bg-[#7ed9ad] text-[#1f3329] font-bold hover:scale-105 duration-200"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          <div class="rounded-2xl border border-[#7ed9ad]/50 bg-[#f4fff9]/80 p-4">
            <label class="font-bold block mb-2">Project Dump</label>

            <textarea
              v-model="projectDump"
              rows="5"
              placeholder="Dump a project idea here..."
              class="w-full rounded-xl border border-[#7ed9ad]/50 bg-white/70 px-4 py-3 outline-none focus:border-[#3f9f73]"
            ></textarea>

            <div class="flex max-sm:flex-col gap-2 mt-3">
              <input
                v-model="projectTitle"
                type="text"
                placeholder="Project title"
                class="w-full rounded-xl border border-[#7ed9ad]/50 bg-white/70 px-4 py-2 outline-none focus:border-[#3f9f73]"
              />

              <button
                @click="saveIdea"
                type="button"
                class="px-4 py-2 rounded-xl bg-[#7ed9ad] text-[#1f3329] font-bold hover:scale-105 duration-200 whitespace-nowrap"
              >
                Save Idea
              </button>
            </div>
          </div>
        </main>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { assistants } from "@/data/assistants";

const selectedAssistantId = ref(localStorage.getItem("jiku-assistant") || "sakura");
const assistantMenuOpen = ref(false);

const chatInput = ref("");
const projectDump = ref("");
const projectTitle = ref("");
const selectedIdea = ref(null);

const savedIdeas = ref(JSON.parse(localStorage.getItem("jiku-ideas") || "[]"));

const currentAssistant = computed(() => {
  return assistants.find((assistant) => assistant.id === selectedAssistantId.value) || assistants[0];
});

const messages = ref([
  {
    id: crypto.randomUUID(),
    role: "assistant",
    text:
      assistants.find((assistant) => assistant.id === selectedAssistantId.value)?.greeting ||
      assistants[0].greeting
  }
]);

watch(selectedAssistantId, () => {
  localStorage.setItem("jiku-assistant", selectedAssistantId.value);

  messages.value = [
    {
      id: crypto.randomUUID(),
      role: "assistant",
      text: currentAssistant.value.greeting
    }
  ];
});

function toggleAssistantMenu() {
  assistantMenuOpen.value = !assistantMenuOpen.value;
}

function selectAssistant(id) {
  selectedAssistantId.value = id;
  assistantMenuOpen.value = false;
}

function openIdea(idea) {
  selectedIdea.value = idea;
}

function closeIdea() {
  selectedIdea.value = null;
}

function deleteIdea(id) {
  savedIdeas.value = savedIdeas.value.filter((idea) => idea.id !== id);
  localStorage.setItem("jiku-ideas", JSON.stringify(savedIdeas.value));

  if (selectedIdea.value?.id === id) {
    selectedIdea.value = null;
  }
}

function sendMessage() {
  const text = chatInput.value.trim();

  if (!text) return;

  messages.value.push({
    id: crypto.randomUUID(),
    role: "user",
    text
  });

  const replies = currentAssistant.value.fakeReplies;
  const reply = replies[Math.floor(Math.random() * replies.length)];

  messages.value.push({
    id: crypto.randomUUID(),
    role: "assistant",
    text: reply
  });

  chatInput.value = "";
}

function saveIdea() {
  const title = projectTitle.value.trim() || "Untitled Idea";
  const text = projectDump.value.trim();

  if (!text) return;

  const newIdea = {
    id: crypto.randomUUID(),
    title,
    text,
    createdAt: new Date().toISOString()
  };

  savedIdeas.value.unshift(newIdea);
  selectedIdea.value = newIdea;

  localStorage.setItem("jiku-ideas", JSON.stringify(savedIdeas.value));


  projectTitle.value = "";
  projectDump.value = "";
}
</script>