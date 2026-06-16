
<template>
  <div class="pt-24 p-2 mx-auto max-w-5xl relative z-10">
    <!-- Page heading -->
    <div class="mt-4 mb-8 text-center">
      <p class="text-5xl max-md:text-center font-bold">
        {{ t.hobbies.title }}
      </p>

      <p class="opacity-75 mt-2">
        {{ t.hobbies.subtitle }}
      </p>
    </div>

    <!-- Personal introduction -->
    <div class="bg-background rounded border border-secondary px-4 py-3 mb-8">
      <div class="flex gap-3 border-b border-secondary border-opacity-50 pb-2">
        <Icon
          icon="mingcute:sparkles-2-fill"
          class="text-primary"
          style="font-size: 2.5em"
        />

        <div>
          <p class="font-bold text-lg">
            {{ t.hobbies.personalTitle }}
          </p>

          <p class="text-sm opacity-60">
            {{ t.hobbies.personalSubtitle }}
          </p>
        </div>
      </div>

      <p class="py-2">
        {{ t.hobbies.personalText }}
      </p>
    </div>

    <!-- Main hobbies -->
    <div class="grid md:grid-cols-2 gap-4">
      <!-- Gaming -->
      <div class="bg-background rounded border border-secondary px-4 py-3">
        <div class="flex gap-3 border-b border-secondary border-opacity-50 pb-2">
          <Icon
            icon="mingcute:game-2-fill"
            class="text-primary"
            style="font-size: 2.5em"
          />

          <div>
            <p class="font-bold text-lg">
              {{ t.hobbies.gamingTitle }}
            </p>

            <p class="text-sm opacity-60">
              {{ t.hobbies.gamingSubtitle }}
            </p>
          </div>
        </div>

        <p class="py-2">
          {{ t.hobbies.gamingText }}
        </p>
      </div>

      <!-- Manga -->
      <div class="bg-background rounded border border-secondary px-4 py-3">
        <div class="flex gap-3 border-b border-secondary border-opacity-50 pb-2">
          <Icon
            icon="mingcute:book-5-fill"
            class="text-primary"
            style="font-size: 2.5em"
          />

          <div>
            <p class="font-bold text-lg">
              {{ t.hobbies.mangaTitle }}
            </p>

            <p class="text-sm opacity-60">
              {{ t.hobbies.mangaSubtitle }}
            </p>
          </div>
        </div>

        <p class="py-2">
          {{ t.hobbies.mangaText }}
        </p>
      </div>

      <!-- Web development -->
      <div class="bg-background rounded border border-secondary px-4 py-3">
        <div class="flex gap-3 border-b border-secondary border-opacity-50 pb-2">
          <Icon
            icon="mingcute:code-fill"
            class="text-primary"
            style="font-size: 2.5em"
          />

          <div>
            <p class="font-bold text-lg">
              {{ t.hobbies.webTitle }}
            </p>

            <p class="text-sm opacity-60">
              {{ t.hobbies.webSubtitle }}
            </p>
          </div>
        </div>

        <p class="py-2">
          {{ t.hobbies.webText }}
        </p>
      </div>

      <!-- Japan / language -->
      <div class="bg-background rounded border border-secondary px-4 py-3">
        <div class="flex gap-3 border-b border-secondary border-opacity-50 pb-2">
          <Icon
            icon="mingcute:planet-fill"
            class="text-primary"
            style="font-size: 2.5em"
          />

          <div>
            <p class="font-bold text-lg">
              {{ t.hobbies.japanTitle }}
            </p>

            <p class="text-sm opacity-60">
              {{ t.hobbies.japanSubtitle }}
            </p>
          </div>
        </div>

        <p class="py-2">
          {{ t.hobbies.japanText }}
        </p>
      </div>
    </div>

    <!-- Currently -->
    <div class="mt-12">
      <p class="text-3xl font-bold text-center mb-6">
        {{ t.hobbies.currentlyTitle }}
      </p>

      <div class="grid md:grid-cols-4 gap-4">
        <div class="bg-background rounded border border-secondary px-4 py-3 text-center">
          <Icon
            icon="mingcute:book-5-fill"
            class="text-primary mx-auto"
            style="font-size: 2.5em"
          />

          <p class="font-bold mt-2">
            {{ t.hobbies.reading }}
          </p>

          <p class="text-sm opacity-75">
            {{ t.hobbies.readingText }}
          </p>
        </div>

        <div class="bg-background rounded border border-secondary px-4 py-3 text-center">
          <Icon
            icon="mingcute:game-2-fill"
            class="text-primary mx-auto"
            style="font-size: 2.5em"
          />

          <p class="font-bold mt-2">
            {{ t.hobbies.games }}
          </p>

          <p class="text-sm opacity-75">
            {{ t.hobbies.gamesText }}
          </p>
        </div>

        <div class="bg-background rounded border border-secondary px-4 py-3 text-center">
          <Icon
            icon="mingcute:code-fill"
            class="text-primary mx-auto"
            style="font-size: 2.5em"
          />

          <p class="font-bold mt-2">
            {{ t.hobbies.learning }}
          </p>

          <p class="text-sm opacity-75">
            {{ t.hobbies.learningText }}
          </p>
        </div>

        <div class="bg-background rounded border border-secondary px-4 py-3 text-center">
          <Icon
            icon="mingcute:planet-fill"
            class="text-primary mx-auto"
            style="font-size: 2.5em"
          />

          <p class="font-bold mt-2">
            {{ t.hobbies.discovery }}
          </p>

          <p class="text-sm opacity-75">
            {{ t.hobbies.discoveryText }}
          </p>
        </div>
      </div>
    </div>

    <!-- Blinkies -->
    <div class="mt-12">
      <p class="text-3xl font-bold text-center mb-6">
        {{ t.hobbies.blinkiesTitle }}
      </p>

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
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <!-- Manga list -->
    <div class="mt-12">
      <p class="text-3xl font-bold text-center mb-6">
        {{ t.hobbies.mangaListTitle }}
      </p>

      <!-- Statistics -->
      <div class="bg-background rounded border border-secondary p-4 mb-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div class="bg-secondary bg-opacity-50 rounded px-3 py-2">
            <p class="text-2xl font-bold text-primary">
              {{ mangaStats.total }}
            </p>

            <p class="text-sm opacity-75">
              {{ t.hobbies.entries }}
            </p>
          </div>

          <div class="bg-secondary bg-opacity-50 rounded px-3 py-2">
            <p class="text-2xl font-bold text-primary">
              {{ mangaStats.completed }}
            </p>

            <p class="text-sm opacity-75">
              {{ t.hobbies.completed }}
            </p>
          </div>

          <div class="bg-secondary bg-opacity-50 rounded px-3 py-2">
            <p class="text-2xl font-bold text-primary">
              {{ mangaStats.reading }}
            </p>

            <p class="text-sm opacity-75">
              {{ t.hobbies.readingStat }}
            </p>
          </div>

          <div class="bg-secondary bg-opacity-50 rounded px-3 py-2">
            <p class="text-2xl font-bold text-primary">
              {{ mangaStats.averageScore }}
            </p>

            <p class="text-sm opacity-75">
              {{ t.hobbies.average }}
            </p>
          </div>
        </div>
      </div>

      <!-- Refresh information -->
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
        <p class="text-xs opacity-60">
          <span v-if="formattedLastUpdated">
            {{ ui.lastUpdated }}: {{ formattedLastUpdated }}
          </span>

          <span v-else>
            {{ ui.notUpdated }}
          </span>
        </p>

        <button
          type="button"
          :disabled="loadingManga"
          @click="fetchMangaList"
          class="inline-flex items-center gap-2 px-3 py-2 rounded
          border border-secondary bg-background text-sm font-bold
          hover:bg-secondary hover:bg-opacity-50 duration-200
          disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Icon
            icon="mingcute:refresh-2-fill"
            :class="{ 'animate-spin': loadingManga }"
          />

          {{ ui.refresh }}
        </button>
      </div>

      <!-- Manga table -->
      <div class="bg-background rounded border border-secondary overflow-x-auto">
        <table class="w-full min-w-[600px] text-left text-sm">
          <thead class="bg-secondary">
            <tr>
              <th class="px-3 py-2">
                {{ t.hobbies.tableTitle }}
              </th>

              <th class="px-3 py-2">
                {{ t.hobbies.tableStatus }}
              </th>

              <th class="px-3 py-2">
                {{ t.hobbies.tableChapters }}
              </th>

              <th class="px-3 py-2">
                {{ t.hobbies.tableScore }}
              </th>
            </tr>
          </thead>

          <tbody>
            <!-- Loading -->
            <tr v-if="loadingManga">
              <td
                colspan="4"
                class="px-3 py-8 text-center opacity-75"
              >
                <Icon
                  icon="mingcute:loading-fill"
                  class="text-primary text-3xl mx-auto mb-2 animate-spin"
                />

                {{ t.hobbies.loading }}
              </td>
            </tr>

            <!-- Error -->
            <tr v-else-if="mangaError">
              <td
                colspan="4"
                class="px-3 py-8 text-center"
              >
                <Icon
                  icon="mingcute:warning-fill"
                  class="text-red-500 text-3xl mx-auto mb-2"
                />

                <p class="font-bold">
                  {{ ui.loadError }}
                </p>

                <p class="text-sm opacity-60 mt-1 mb-4">
                  {{ mangaError }}
                </p>

                <button
                  type="button"
                  @click="fetchMangaList"
                  class="px-4 py-2 rounded bg-primary text-background
                  font-bold hover:scale-105 duration-200"
                >
                  {{ ui.tryAgain }}
                </button>
              </td>
            </tr>

            <!-- Empty list -->
            <tr v-else-if="mangaList.length === 0">
              <td
                colspan="4"
                class="px-3 py-8 text-center opacity-75"
              >
                {{ t.hobbies.error }}
              </td>
            </tr>

            <!-- Results -->
            <template v-else>
              <tr
                v-for="item in mangaList"
                :key="item.id"
                class="border-t border-secondary border-opacity-50
                hover:bg-secondary hover:bg-opacity-20 duration-200"
              >
                <td class="px-3 py-3 font-bold">
                  <a
                    :href="item.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 hover:text-primary duration-200"
                  >
                    {{ item.title }}

                    <Icon
                      icon="mingcute:external-link-line"
                      class="text-xs opacity-50"
                    />
                  </a>
                </td>

                <td class="px-3 py-3">
                  <span
                    class="inline-block px-2 py-1 rounded
                    bg-secondary bg-opacity-70 text-xs font-bold"
                  >
                    {{ formatStatus(item.status) }}
                  </span>
                </td>

                <td class="px-3 py-3">
                  {{ formatChapters(item) }}
                </td>

                <td class="px-3 py-3 text-primary font-bold">
                  {{ formatScore(item.score) }}
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>

      <!-- Show more -->
      <div
        v-if="!loadingManga && !mangaError && allMangaList.length > 0"
        class="text-center mt-4"
      >
        <p class="text-sm opacity-60 mb-3">
          {{ ui.showing }}
          {{ mangaList.length }}
          {{ ui.of }}
          {{ allMangaList.length }}
          {{ ui.entries }}
        </p>

        <button
          v-if="hasMoreManga"
          type="button"
          @click="loadMoreManga"
          class="inline-flex items-center gap-2 px-4 py-2 rounded
          border border-secondary bg-background font-bold
          hover:bg-secondary hover:bg-opacity-50
          hover:scale-105 duration-200"
        >
          <Icon icon="mingcute:down-fill" />

          {{ ui.showMore }}
        </button>

        <p
          v-else
          class="text-sm opacity-60"
        >
          {{ ui.allDisplayed }}
        </p>
      </div>

      <!-- AniList link -->
      <div class="text-center mt-6">
        <p class="opacity-75 text-sm mb-3">
          {{ t.hobbies.anilistText }}
        </p>

        <a
          href="https://anilist.co/user/Jikue"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2
          bg-primary text-background font-bold rounded
          hover:scale-105 duration-200"
        >
          <Icon
            icon="mingcute:external-link-fill"
            class="text-xl"
          />

          {{ t.hobbies.anilistButton }}
        </a>
      </div>
    </div>

    <!-- Closing -->
    <div class="mt-12 mb-6 bg-background rounded border border-secondary px-4 py-3 text-center">
      <p class="opacity-80">
        {{ t.hobbies.closingText }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { Icon } from "@iconify/vue";
import { useLanguage } from "@/stores/language";
import { text } from "@/translations/portfolioText";

const { currentLanguage } = useLanguage();

const t = computed(() => {
  return text[currentLanguage.value];
});

/*
|--------------------------------------------------------------------------
| Small interface translations
|--------------------------------------------------------------------------
|
| These texts are kept here so you do not need to immediately add more
| keys to portfolioText.js.
|
*/

const ui = computed(() => {
  const isFrench = currentLanguage.value === "fr";

  return isFrench
    ? {
        lastUpdated: "Dernière mise à jour",
        notUpdated: "Pas encore mis à jour",
        refresh: "Actualiser",
        loadError: "Impossible de charger la liste AniList",
        tryAgain: "Réessayer",
        showing: "Affichage de",
        of: "sur",
        entries: "entrées",
        showMore: "Afficher plus",
        allDisplayed: "Toutes les entrées sont affichées"
      }
    : {
        lastUpdated: "Last updated",
        notUpdated: "Not updated yet",
        refresh: "Refresh",
        loadError: "Unable to load the AniList list",
        tryAgain: "Try again",
        showing: "Showing",
        of: "of",
        entries: "entries",
        showMore: "Show more",
        allDisplayed: "All entries are displayed"
      };
});

/*
|--------------------------------------------------------------------------
| Blinkies
|--------------------------------------------------------------------------
*/

const blinkies = [
  {
    name: "Blinkie 1",
    src: `${import.meta.env.BASE_URL}blinkies/blinkie1.gif`
  },
  {
    name: "Blinkie 2",
    src: `${import.meta.env.BASE_URL}blinkies/blinkie2.gif`
  },
  {
    name: "Blinkie 3",
    src: `${import.meta.env.BASE_URL}blinkies/blinkie3.gif`
  },
  {
    name: "Blinkie 4",
    src: `${import.meta.env.BASE_URL}blinkies/blinkie4.gif`
  },
  {
    name: "Blinkie 5",
    src: `${import.meta.env.BASE_URL}blinkies/blinkie5.gif`
  },
  {
    name: "Blinkie 6",
    src: `${import.meta.env.BASE_URL}blinkies/blinkie6.gif`
  },
  {
    name: "Blinkie 7",
    src: `${import.meta.env.BASE_URL}blinkies/blinkie7.png`
  },
  {
    name: "Blinkie 8",
    src: `${import.meta.env.BASE_URL}blinkies/blinkie8.gif`
  },
  {
    name: "Blinkie 9",
    src: `${import.meta.env.BASE_URL}blinkies/blinkie9.png`
  }
];

/*
|--------------------------------------------------------------------------
| AniList settings
|--------------------------------------------------------------------------
*/

const ANILIST_API_URL = "https://graphql.anilist.co";
const ANILIST_USERNAME = "Jikue";

const INITIAL_VISIBLE_ENTRIES = 20;
const ENTRIES_PER_LOAD = 20;

/*
|--------------------------------------------------------------------------
| AniList state
|--------------------------------------------------------------------------
*/

const loadingManga = ref(false);
const mangaError = ref("");

const allMangaList = ref([]);
const visibleCount = ref(INITIAL_VISIBLE_ENTRIES);

const lastUpdated = ref(null);

/*
|--------------------------------------------------------------------------
| AniList GraphQL query
|--------------------------------------------------------------------------
*/

const query = `
  query ($username: String) {
    MediaListCollection(
      userName: $username
      type: MANGA
      sort: UPDATED_TIME_DESC
    ) {
      lists {
        name
        entries {
          id
          score
          status
          progress
          updatedAt

          media {
            id

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

/*
|--------------------------------------------------------------------------
| Computed displayed list
|--------------------------------------------------------------------------
|
| allMangaList contains the complete AniList collection.
| mangaList only contains the entries currently displayed in the table.
|
*/

const mangaList = computed(() => {
  return allMangaList.value.slice(0, visibleCount.value);
});

const hasMoreManga = computed(() => {
  return visibleCount.value < allMangaList.value.length;
});

/*
|--------------------------------------------------------------------------
| Manga statistics
|--------------------------------------------------------------------------
|
| Statistics are calculated from the complete collection, not only the
| first 20 visible entries.
|
*/

const mangaStats = computed(() => {
  const completeList = allMangaList.value;

  const total = completeList.length;

  const completed = completeList.filter((item) => {
    return item.status === "COMPLETED";
  }).length;

  const reading = completeList.filter((item) => {
    return item.status === "CURRENT";
  }).length;

  const scoredItems = completeList.filter((item) => {
    return typeof item.score === "number" && item.score > 0;
  });

  const averageScore =
    scoredItems.length > 0
      ? (
          scoredItems.reduce((sum, item) => {
            return sum + item.score;
          }, 0) / scoredItems.length
        ).toFixed(1)
      : "-";

  return {
    total,
    completed,
    reading,
    averageScore
  };
});

/*
|--------------------------------------------------------------------------
| Last update date
|--------------------------------------------------------------------------
*/

const formattedLastUpdated = computed(() => {
  if (!lastUpdated.value) {
    return "";
  }

  const locale =
    currentLanguage.value === "fr"
      ? "fr-FR"
      : "en-GB";

  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(lastUpdated.value);
});

/*
|--------------------------------------------------------------------------
| AniList data helpers
|--------------------------------------------------------------------------
*/

function getTitle(media) {
  return (
    media?.title?.english ||
    media?.title?.romaji ||
    "Unknown title"
  );
}

function normalizeEntry(entry) {
  const score =
    typeof entry.score === "number" && entry.score > 0
      ? entry.score
      : null;

  return {
    id: entry.id,
    mediaId: entry.media?.id,
    title: getTitle(entry.media),
    status: entry.status || "UNKNOWN",
    score,
    progress: entry.progress || 0,
    chapters: entry.media?.chapters || null,
    url: entry.media?.siteUrl || "#",
    updatedAt: entry.updatedAt || 0
  };
}

function removeDuplicateEntries(entries) {
  const uniqueEntries = new Map();

  for (const entry of entries) {
    const key = entry.mediaId || entry.id;

    if (!uniqueEntries.has(key)) {
      uniqueEntries.set(key, entry);
    }
  }

  return Array.from(uniqueEntries.values());
}

/*
|--------------------------------------------------------------------------
| Manga sorting
|--------------------------------------------------------------------------
|
| Currently reading entries appear first.
| Entries inside the same status are sorted by the last update time.
|
*/

function sortMangaEntries(entries) {
  const statusPriority = {
    CURRENT: 0,
    REPEATING: 1,
    PLANNING: 2,
    PAUSED: 3,
    COMPLETED: 4,
    DROPPED: 5,
    UNKNOWN: 6
  };

  return [...entries].sort((a, b) => {
    const statusA = statusPriority[a.status] ?? 99;
    const statusB = statusPriority[b.status] ?? 99;

    if (statusA !== statusB) {
      return statusA - statusB;
    }

    if (a.updatedAt !== b.updatedAt) {
      return b.updatedAt - a.updatedAt;
    }

    const scoreA = a.score || 0;
    const scoreB = b.score || 0;

    return scoreB - scoreA;
  });
}

/*
|--------------------------------------------------------------------------
| Fetch AniList collection
|--------------------------------------------------------------------------
*/

async function fetchMangaList() {
  loadingManga.value = true;
  mangaError.value = "";

  try {
    const response = await fetch(ANILIST_API_URL, {
      method: "POST",

      /*
       * Prevent the browser from reusing an older cached response.
       */
      cache: "no-store",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },

      body: JSON.stringify({
        query,
        variables: {
          username: ANILIST_USERNAME
        }
      })
    });

    const result = await response.json();

    if (!response.ok) {
      const errorMessage =
        result.errors?.[0]?.message ||
        `AniList request failed with status ${response.status}`;

      throw new Error(errorMessage);
    }

    if (result.errors?.length) {
      throw new Error(result.errors[0].message);
    }

    const lists =
      result.data?.MediaListCollection?.lists || [];

    const entries = lists.flatMap((list) => {
      if (!Array.isArray(list.entries)) {
        return [];
      }

      return list.entries.map(normalizeEntry);
    });

    const uniqueEntries = removeDuplicateEntries(entries);
    const sortedEntries = sortMangaEntries(uniqueEntries);

    allMangaList.value = sortedEntries;
    visibleCount.value = INITIAL_VISIBLE_ENTRIES;
    lastUpdated.value = new Date();

    if (allMangaList.value.length === 0) {
      mangaError.value =
        currentLanguage.value === "fr"
          ? "Aucune entrée manga n'a été trouvée."
          : "No manga entries were found.";
    }
  } catch (error) {
    console.error("AniList error:", error);

    allMangaList.value = [];

    mangaError.value =
      error instanceof Error
        ? error.message
        : currentLanguage.value === "fr"
          ? "Impossible de charger la liste AniList."
          : "Unable to load the AniList list.";
  } finally {
    loadingManga.value = false;
  }
}

/*
|--------------------------------------------------------------------------
| Table actions
|--------------------------------------------------------------------------
*/

function loadMoreManga() {
  visibleCount.value += ENTRIES_PER_LOAD;
}

/*
|--------------------------------------------------------------------------
| Formatting
|--------------------------------------------------------------------------
*/

function formatStatus(status) {
  return t.value.hobbies.status?.[status] || status;
}

function formatScore(score) {
  return score ?? "-";
}

function formatChapters(item) {
  return `${item.progress} / ${item.chapters ?? "?"}`;
}

/*
|--------------------------------------------------------------------------
| Initial loading
|--------------------------------------------------------------------------
*/

onMounted(() => {
  fetchMangaList();
});
</script>

<style scoped>
.image-render-pixel {
  image-rendering: pixelated;
}
</style>

