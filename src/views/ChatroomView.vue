<template>
  <div
    v-if="showNotice"
    class="fixed inset-0 z-[999] flex items-center justify-center px-4 bg-[#1f3329]/40 backdrop-blur-sm"
  >
    <div
      class="max-w-md w-full rounded-3xl border border-[#7ed9ad]/60 bg-[#f4fff9] text-[#1f3329] shadow-2xl overflow-hidden"
    >
      <div class="p-5 border-b border-[#7ed9ad]/40 bg-[#d7f5e6]/70">
        <p class="text-xs uppercase tracking-[0.3em] opacity-60">notice</p>
        <h2 class="text-2xl font-bold mt-1">This page is actively under construction</h2>
      </div>

      <div class="p-5">
        <p class="opacity-80 leading-relaxed">
          I'm testing and experimenting with AI here because i'm that lonely
         so I made some characters to chat with. You can also dump your ideas here to save them and maybe chat about them with the characters.
        </p>

        <p class="text-sm opacity-60 mt-3">
          Some things may change, break, or behave strangely while I test new ideas.
        </p>

        <div class="flex justify-end mt-5">
          <button
            @click="closeNotice"
            type="button"
            class="px-4 py-2 rounded-xl bg-[#7ed9ad] text-[#1f3329] font-bold hover:scale-105 duration-200"
          >
            Enter ChatRoom
          </button>
        </div>
      </div>
    </div>
  </div>

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
          <h1 class="text-2xl sm:text-4xl font-bold">ChatRoom</h1>
          <p class="text-sm opacity-70 mt-1">
            A small experimental room for characters, roleplay, ideas, and strange conversations.
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
                  {{ currentCharacter.emoji }}
                </div>

                <div class="min-w-0">
                  <p class="font-bold leading-tight">{{ currentCharacter.name }}</p>
                  <p class="text-xs opacity-50 mt-1">
                    Memory note: I can only recall recent messages here, not everything forever.
                  </p>
                </div>
              </div>

              <div class="relative shrink-0">
                <button
                  @click="toggleCharacterMenu"
                  type="button"
                  class="px-3 py-2 rounded-xl bg-white/70 border border-[#7ed9ad]/50 hover:bg-[#7ed9ad]/30 duration-200 flex items-center gap-2 font-bold text-sm"
                >
                  <span>{{ currentCharacter.emoji }}</span>
                  <span class="hidden sm:inline">{{ currentCharacter.name }}</span>

                  <Icon
                    icon="mingcute:down-fill"
                    class="duration-200"
                    :class="characterMenuOpen ? 'rotate-180' : ''"
                  />
                </button>

                <div
                  v-if="characterMenuOpen"
                  class="absolute right-0 mt-2 z-30 w-60 rounded-2xl border border-[#7ed9ad]/50 bg-[#f4fff9] shadow-xl overflow-hidden"
                >
                  <button
                    v-for="character in characters"
                    :key="character.id"
                    @click="selectCharacter(character.id)"
                    type="button"
                    class="w-full text-left p-3 hover:bg-[#d7f5e6] duration-200"
                    :class="selectedCharacterId === character.id ? 'bg-[#7ed9ad]/30' : ''"
                  >
                    <div class="flex items-center gap-3">
                      <span class="text-2xl">{{ character.emoji }}</span>

                      <div class="min-w-0">
                        <p class="font-bold">{{ character.name }}</p>
                        <p class="text-xs opacity-70 truncate">
                          {{ character.shortDescription }}
                        </p>
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
                  {{ message.role === "user" ? "Jiku" : currentCharacter.name }}
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
                  placeholder="Type a message, scene, or project thought..."
                  class="w-full rounded-xl border border-[#7ed9ad]/50 bg-white/70 px-4 py-2 outline-none focus:border-[#3f9f73]"
                />

                <button
                  type="submit"
                  :disabled="isCharacterThinking"
                  class="px-4 py-2 rounded-xl bg-[#7ed9ad] text-[#1f3329] font-bold hover:scale-105 duration-200 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {{ isCharacterThinking ? "Thinking..." : "Send" }}
                </button>
              </div>
            </form>
          </div>

          <div class="rounded-2xl border border-[#7ed9ad]/50 bg-[#f4fff9]/80 p-4">
            <label class="font-bold block mb-2">Idea Dump</label>

            <textarea
              v-model="projectDump"
              rows="5"
              placeholder="Dump an idea, scene, project concept, or worldbuilding note here..."
              class="w-full rounded-xl border border-[#7ed9ad]/50 bg-white/70 px-4 py-3 outline-none focus:border-[#3f9f73]"
            ></textarea>

            <div class="flex max-sm:flex-col gap-2 mt-3">
              <input
                v-model="projectTitle"
                type="text"
                placeholder="Idea title"
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
import { computed, ref, watch, onMounted } from "vue";
import { characters } from "@/data/characters";

const selectedCharacterId = ref(localStorage.getItem("jiku-character") || "murasame");
const characterMenuOpen = ref(false);
const showNotice = ref(true);

const chatInput = ref("");
const projectDump = ref("");
const projectTitle = ref("");
const selectedIdea = ref(null);
const isCharacterThinking = ref(false);

const savedIdeas = ref(JSON.parse(localStorage.getItem("Saved-ideas") || "[]"));

const currentCharacter = computed(() => {
  return characters.find((character) => character.id === selectedCharacterId.value) || characters[0];
});

const messages = ref([]);

onMounted(() => {
  startCharacterConversation();
});

watch(selectedCharacterId, () => {
  localStorage.setItem("jiku-character", selectedCharacterId.value);
  startCharacterConversation();
});

function toggleCharacterMenu() {
  characterMenuOpen.value = !characterMenuOpen.value;
}

function closeNotice() {
  showNotice.value = false;
}

function selectCharacter(id) {
  selectedCharacterId.value = id;
  characterMenuOpen.value = false;
}

function openIdea(idea) {
  selectedIdea.value = idea;
}

function closeIdea() {
  selectedIdea.value = null;
}

function deleteIdea(id) {
  savedIdeas.value = savedIdeas.value.filter((idea) => idea.id !== id);
  localStorage.setItem("Saved-ideas", JSON.stringify(savedIdeas.value));

  if (selectedIdea.value?.id === id) {
    selectedIdea.value = null;
  }
}

async function startCharacterConversation() {
  const characterAtStart = currentCharacter.value;
  const thinkingMessageId = crypto.randomUUID();

  isCharacterThinking.value = true;

  messages.value = [
    {
      id: thinkingMessageId,
      role: "assistant",
      text: `${characterAtStart.name} is connecting...`
    }
  ];

  try {
    const response = await fetch("https://jiku-labs-api.jikulabs.workers.dev/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        personality: selectedCharacterId.value,
        history: [],
        message:
          "Start the scene in character. The user came unexpectedly and you weren't prepared, so you greet them in character. Do not try to make the user start a conversation. You can also start with a thought. Keep it short and sweet, just a few sentences to set the mood."
      })
    });

    const data = await response.json();

    const thinkingMessage = messages.value.find(
      (message) => message.id === thinkingMessageId
    );

    if (thinkingMessage) {
      thinkingMessage.text = data.reply || "....";
    }
  } catch (error) {
    const thinkingMessage = messages.value.find(
      (message) => message.id === thinkingMessageId
    );

    if (thinkingMessage) {
      thinkingMessage.text = "I could not reach the Chatroom API right now.";
    }
  } finally {
    isCharacterThinking.value = false;
  }
}

async function sendMessage() {
  const text = chatInput.value.trim();

  if (!text || isCharacterThinking.value) return;

  const previousHistory = messages.value.slice(-20).map((message) => ({
    role: message.role,
    text: message.text
  }));

  messages.value.push({
    id: crypto.randomUUID(),
    role: "user",
    text
  });

  chatInput.value = "";
  isCharacterThinking.value = true;

  const thinkingMessageId = crypto.randomUUID();

  messages.value.push({
    id: thinkingMessageId,
    role: "assistant",
    text: `${currentCharacter.value.name} is thinking...`
  });

  try {
    const response = await fetch("https://jiku-labs-api.jikulabs.workers.dev/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: text,
        personality: selectedCharacterId.value,
        history: previousHistory
      })
    });

    const data = await response.json();

    const thinkingMessage = messages.value.find(
      (message) => message.id === thinkingMessageId
    );

    if (thinkingMessage) {
      thinkingMessage.text = data.reply || "I could not generate a reply.";
    }
  } catch (error) {
    const thinkingMessage = messages.value.find(
      (message) => message.id === thinkingMessageId
    );

    if (thinkingMessage) {
      thinkingMessage.text = "I could not reach the Chatroom API right now.";
    }
  } finally {
    isCharacterThinking.value = false;
  }
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

  localStorage.setItem("Saved-ideas", JSON.stringify(savedIdeas.value));

  projectTitle.value = "";
  projectDump.value = "";
}
</script>