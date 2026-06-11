<template>
  <div class="fixed bottom-4 right-4 z-[900]">
    <button
      @click="toggleMusic"
      type="button"
      class="px-3 py-2 rounded-xl bg-[#f4fff9]/80
      border border-[#7ed9ad]/50 text-[#1f3329] font-bold backdrop-blur
      hover:bg-[#d7f5eb] duration-200"
    >
      {{ isPlaying ? "Music: On" : "Music: Off" }}
    </button>

    <audio
      ref="audioRef"
      src="/audio/site-theme.mp3"
      loop
      preload="auto"
    ></audio>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const audioRef = ref(null);
const isPlaying = ref(false);

async function playMusic() {
  if (!audioRef.value) return;

  audioRef.value.volume = 0.05;

  try {
    await audioRef.value.play();
    isPlaying.value = true;
    localStorage.setItem("my-music", "on");
  } catch (error) {
    isPlaying.value = false;
    console.log("Music play failed:", error);
  }
}

function pauseMusic() {
  if (!audioRef.value) return;

  audioRef.value.pause();
  isPlaying.value = false;
  localStorage.setItem("my-music", "off");
}

async function toggleMusic() {
  if (isPlaying.value) {
    pauseMusic();
    return;
  }

  await playMusic();
}

function handleEntryClick() {
  const musicPreference = localStorage.getItem("my-music");

  if (musicPreference === "off") return;

  playMusic();
}

onMounted(() => {
  window.addEventListener("jiku-entered", handleEntryClick);
});

onUnmounted(() => {
  window.removeEventListener("jiku-entered", handleEntryClick);
});
</script>