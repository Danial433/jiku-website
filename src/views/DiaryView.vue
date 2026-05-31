<template>
  <div class="pt-24 p-2 mx-auto max-w-5xl relative z-10">
    <div class="mt-4 mb-8 text-center">
      <p class="text-5xl max-md:text-center font-bold">{{ t.hobbies.title }}</p>
      <p class="opacity-75 mt-2">
        {{ t.hobbies.subtitle }}
      </p>
    </div>

    <div class="bg-background rounded border border-secondary px-4 py-3 mb-8">
      <div class="flex gap-3 border-b border-secondary border-opacity-50 pb-2">
        <Icon icon="mingcute:sparkles-2-fill" class="text-primary" style="font-size: 2.5em" />
        <div>
          <p class="font-bold text-lg">{{ t.hobbies.personalTitle }}</p>
          <p class="text-sm opacity-60">{{ t.hobbies.personalSubtitle }}</p>
        </div>
      </div>

      <p class="py-2">
        {{ t.hobbies.personalText }}
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-4">
      <div class="bg-background rounded border border-secondary px-4 py-3">
        <div class="flex gap-3 border-b border-secondary border-opacity-50 pb-2">
          <Icon icon="mingcute:game-2-fill" class="text-primary" style="font-size: 2.5em" />
          <div>
            <p class="font-bold text-lg">{{ t.hobbies.gamingTitle }}</p>
            <p class="text-sm opacity-60">{{ t.hobbies.gamingSubtitle }}</p>
          </div>
        </div>
        <p class="py-2">
          {{ t.hobbies.gamingText }}
        </p>
      </div>

      <div class="bg-background rounded border border-secondary px-4 py-3">
        <div class="flex gap-3 border-b border-secondary border-opacity-50 pb-2">
          <Icon icon="mingcute:book-5-fill" class="text-primary" style="font-size: 2.5em" />
          <div>
            <p class="font-bold text-lg">{{ t.hobbies.mangaTitle }}</p>
            <p class="text-sm opacity-60">{{ t.hobbies.mangaSubtitle }}</p>
          </div>
        </div>
        <p class="py-2">
          {{ t.hobbies.mangaText }}
        </p>
      </div>

      <div class="bg-background rounded border border-secondary px-4 py-3">
        <div class="flex gap-3 border-b border-secondary border-opacity-50 pb-2">
          <Icon icon="mingcute:code-fill" class="text-primary" style="font-size: 2.5em" />
          <div>
            <p class="font-bold text-lg">{{ t.hobbies.webTitle }}</p>
            <p class="text-sm opacity-60">{{ t.hobbies.webSubtitle }}</p>
          </div>
        </div>
        <p class="py-2">
          {{ t.hobbies.webText }}
        </p>
      </div>

      <div class="bg-background rounded border border-secondary px-4 py-3">
        <div class="flex gap-3 border-b border-secondary border-opacity-50 pb-2">
          <Icon icon="mingcute:planet-fill" class="text-primary" style="font-size: 2.5em" />
          <div>
            <p class="font-bold text-lg">{{ t.hobbies.japanTitle }}</p>
            <p class="text-sm opacity-60">{{ t.hobbies.japanSubtitle }}</p>
          </div>
        </div>
        <p class="py-2">
          {{ t.hobbies.japanText }}
        </p>
      </div>
    </div>

    <div class="mt-12">
      <p class="text-3xl font-bold text-center mb-6">{{ t.hobbies.currentlyTitle }}</p>

      <div class="grid md:grid-cols-4 gap-4">
        <div class="bg-background rounded border border-secondary px-4 py-3 text-center">
          <Icon icon="mingcute:book-5-fill" class="text-primary mx-auto" style="font-size: 2.5em" />
          <p class="font-bold mt-2">{{ t.hobbies.reading }}</p>
          <p class="text-sm opacity-75">{{ t.hobbies.readingText }}</p>
        </div>

        <div class="bg-background rounded border border-secondary px-4 py-3 text-center">
          <Icon icon="mingcute:game-2-fill" class="text-primary mx-auto" style="font-size: 2.5em" />
          <p class="font-bold mt-2">{{ t.hobbies.games }}</p>
          <p class="text-sm opacity-75">{{ t.hobbies.gamesText }}</p>
        </div>

        <div class="bg-background rounded border border-secondary px-4 py-3 text-center">
          <Icon icon="mingcute:code-fill" class="text-primary mx-auto" style="font-size: 2.5em" />
          <p class="font-bold mt-2">{{ t.hobbies.learning }}</p>
          <p class="text-sm opacity-75">{{ t.hobbies.learningText }}</p>
        </div>

        <div class="bg-background rounded border border-secondary px-4 py-3 text-center">
          <Icon icon="mingcute:planet-fill" class="text-primary mx-auto" style="font-size: 2.5em" />
          <p class="font-bold mt-2">{{ t.hobbies.discovery }}</p>
          <p class="text-sm opacity-75">{{ t.hobbies.discoveryText }}</p>
        </div>
      </div>
    </div>

    <div class="mt-12">
      <p class="text-3xl font-bold text-center mb-6">{{ t.hobbies.blinkiesTitle }}</p>

      <div class="bg-background rounded border border-secondary p-4">
        <p class="text-center opacity-75 text-sm mb-4">
          {{ t.hobbies.blinkiesText }}
        </p>

        <div class="flex flex-wrap gap-2 justify-center">
          <img
            v-for="blinkie in blinkies"
            :key="blinkie.name"
            :src="blinkie.src"
            :alt="blinkie.name"
            class="h-[31px] w-[88px] image-render-pixel hover:scale-110 duration-200"
          />
        </div>
      </div>
    </div>

    <div class="mt-12">
      <p class="text-3xl font-bold text-center mb-6">{{ t.hobbies.mangaListTitle }}</p>

      <div class="bg-background rounded border border-secondary p-4 mb-4">
        <div class="grid md:grid-cols-4 gap-3 text-center">
          <div class="bg-secondary bg-opacity-50 rounded px-3 py-2">
            <p class="text-2xl font-bold text-primary">{{ mangaStats.total }}</p>
            <p class="text-sm opacity-75">{{ t.hobbies.entries }}</p>
          </div>

          <div class="bg-secondary bg-opacity-50 rounded px-3 py-2">
            <p class="text-2xl font-bold text-primary">{{ mangaStats.completed }}</p>
            <p class="text-sm opacity-75">{{ t.hobbies.completed }}</p>
          </div>

          <div class="bg-secondary bg-opacity-50 rounded px-3 py-2">
            <p class="text-2xl font-bold text-primary">{{ mangaStats.reading }}</p>
            <p class="text-sm opacity-75">{{ t.hobbies.readingStat }}</p>
          </div>

          <div class="bg-secondary bg-opacity-50 rounded px-3 py-2">
            <p class="text-2xl font-bold text-primary">{{ mangaStats.averageScore }}</p>
            <p class="text-sm opacity-75">{{ t.hobbies.average }}</p>
          </div>
        </div>
      </div>

      <div class="bg-background rounded border border-secondary overflow-x-auto">
        <table class="w-full min-w-[600px] text-left text-sm">
          <thead class="bg-secondary">
            <tr>
              <th class="px-3 py-2">{{ t.hobbies.tableTitle }}</th>
              <th class="px-3 py-2">{{ t.hobbies.tableStatus }}</th>
              <th class="px-3 py-2">{{ t.hobbies.tableChapters }}</th>
              <th class="px-3 py-2">{{ t.hobbies.tableScore }}</th>
            </tr>
          </thead>

          <tbody>
            <tr v-if="loadingManga">
              <td colspan="4" class="px-3 py-4 text-center opacity-75">
                {{ t.hobbies.loading }}
              </td>
            </tr>

            <tr v-else-if="mangaList.length === 0">
              <td colspan="4" class="px-3 py-4 text-center opacity-75">
                {{ t.hobbies.error }}
              </td>
            </tr>

            <tr
              v-for="item in mangaList"
              :key="item.id"
              class="border-t border-secondary border-opacity-50"
            >
              <td class="px-3 py-2 font-bold">
                <a
                  :href="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-primary duration-200"
                >
                  {{ item.title }}
                </a>
              </td>

              <td class="px-3 py-2">
                <span class="px-2 py-1 rounded bg-secondary bg-opacity-70 text-xs font-bold">
                  {{ formatStatus(item.status) }}
                </span>
              </td>

              <td class="px-3 py-2">
                {{ item.progress }} / {{ item.chapters }}
              </td>

              <td class="px-3 py-2 text-primary font-bold">
                {{ item.score }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="text-center mt-4">
        <p class="opacity-75 text-sm mb-3">
          {{ t.hobbies.anilistText }}
        </p>

        <a
          href="https://anilist.co/user/Jikue"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-primary text-background font-bold rounded hover:scale-105 duration-200"
        >
          <Icon icon="mingcute:external-link-fill" class="text-xl" />
          {{ t.hobbies.anilistButton }}
        </a>
      </div>
    </div>

    <div class="mt-12 mb-6 bg-background rounded border border-secondary px-4 py-3 text-center">
      <p class="opacity-80">
        {{ t.hobbies.closingText }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useLanguage } from "@/stores/language";
import { text } from "@/translations/portfolioText";

const { currentLanguage } = useLanguage();
const t = computed(() => text[currentLanguage.value]);

const blinkies = [
  {
    name: "Blinkie 1",
    src: import.meta.env.BASE_URL + "blinkies/blinkie1.gif"
  },
  {
    name: "Blinkie 2",
    src: import.meta.env.BASE_URL + "blinkies/blinkie2.gif"
  },
  {
    name: "Blinkie 3",
    src: import.meta.env.BASE_URL + "blinkies/blinkie3.gif"
  },
  {
    name: "Blinkie 4",
    src: import.meta.env.BASE_URL + "blinkies/blinkie4.gif"
  },
  {
    name: "Blinkie 5",
    src: import.meta.env.BASE_URL + "blinkies/blinkie5.gif"
  },
  {
    name: "Blinkie 6",
    src: import.meta.env.BASE_URL + "blinkies/blinkie6.gif"
  },
  {
    name: "Blinkie 7",
    src: import.meta.env.BASE_URL + "blinkies/blinkie7.png"
  },
  {
    name: "Blinkie 8",
    src: import.meta.env.BASE_URL + "blinkies/blinkie8.gif"
  },
  {
    name: "Blinkie 9",
    src: import.meta.env.BASE_URL + "blinkies/blinkie9.png"
  }
];

const loadingManga = ref(true);
const mangaList = ref([]);

const query = `
query ($username: String) {
  MediaListCollection(userName: $username, type: MANGA) {
    lists {
      name
      entries {
        id
        score
        status
        progress
        media {
          title {
            romaji
            english
          }
          chapters
          siteUrl
        }
      }
    }
  }
}
`;

onMounted(async () => {
  try {
    const response = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        query,
        variables: {
          username: "Jikue"
        }
      })
    });

    const result = await response.json();

    mangaList.value = result.data.MediaListCollection.lists
      .flatMap((list) =>
        list.entries.map((entry) => ({
          id: entry.id,
          title: entry.media.title.romaji || entry.media.title.english || "Titre inconnu",
          status: entry.status,
          score: entry.score || "-",
          progress: entry.progress || 0,
          chapters: entry.media.chapters || "?",
          url: entry.media.siteUrl
        }))
      )
      .sort((a, b) => {
        if (a.status === "CURRENT" && b.status !== "CURRENT") return -1;
        if (a.status !== "CURRENT" && b.status === "CURRENT") return 1;

        const scoreA = typeof a.score === "number" ? a.score : 0;
        const scoreB = typeof b.score === "number" ? b.score : 0;

        return scoreB - scoreA;
      })
      .slice(0, 20);
  } catch (error) {
    console.error("Erreur AniList:", error);
    mangaList.value = [];
  } finally {
    loadingManga.value = false;
  }
});

const mangaStats = computed(() => {
  const total = mangaList.value.length;
  const completed = mangaList.value.filter((item) => item.status === "COMPLETED").length;
  const reading = mangaList.value.filter((item) => item.status === "CURRENT").length;

  const scoredItems = mangaList.value.filter(
    (item) => typeof item.score === "number" && item.score > 0
  );

  const averageScore =
    scoredItems.length > 0
      ? Math.round(scoredItems.reduce((sum, item) => sum + item.score, 0) / scoredItems.length)
      : "-";

  return {
    total,
    completed,
    reading,
    averageScore
  };
});

function formatStatus(status) {
  return t.value.hobbies.status[status] || status;
}
</script>

<style scoped>
.image-render-pixel {
  image-rendering: pixelated;
}
</style>