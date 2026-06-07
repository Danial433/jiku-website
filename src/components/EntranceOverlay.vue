<template>
  <div
    v-if="showEntrance"
    class="fixed inset-0 z-[1000] flex items-center justify-center bg-[#1f3329]/40 backdrop-blur-md px-4"
  >
    <div
      class="relative max-w-md w-full rounded-3xl border border-[#7ed9ad]/60 bg-[#f4fff9] text-[#1f3329] shadow-2xl overflow-hidden"
    >
      <button
        @click="openIdentityPanel"
        type="button"
        class="absolute top-3 right-4 text-xs opacity-40 hover:opacity-80 duration-200"
      >
        identify
      </button>

      <div class="p-6 text-center">
        <p class="text-xs uppercase tracking-[0.3em] opacity-50">jiku labs</p>

        <h2 class="text-3xl font-bold mt-2">Welcome</h2>

        <p class="opacity-70 mt-3">
          This is a personal space for projects, experiments, ideas, and strange little things.
        </p>

        <button
          @click="enterAsVisitor"
          type="button"
          class="mt-6 px-5 py-2 rounded-xl bg-[#7ed9ad] text-[#1f3329] font-bold hover:scale-105 duration-200"
        >
          Click to enter
        </button>
      </div>

      <div
        v-if="identityPanelOpen"
        class="border-t border-[#7ed9ad]/40 bg-[#d7f5e6]/50 p-4"
      >
        <label class="text-sm font-bold block mb-2">
          Identity code
        </label>

        <input
          v-model="identityCode"
          type="password"
          placeholder="Enter code..."
          class="w-full rounded-xl border border-[#7ed9ad]/50 bg-white/70 px-4 py-2 outline-none focus:border-[#3f9f73]"
          @keydown.enter="verifyIdentity"
        />

        <p v-if="identityError" class="text-sm text-red-500 mt-2">
          {{ identityError }}
        </p>

        <div class="flex justify-end gap-2 mt-3">
          <button
            @click="closeIdentityPanel"
            type="button"
            class="px-3 py-2 rounded-xl border border-[#7ed9ad]/50 text-sm font-bold hover:bg-white/60 duration-200"
          >
            Cancel
          </button>

          <button
            @click="verifyIdentity"
            type="button"
            :disabled="isChecking"
            class="px-3 py-2 rounded-xl bg-[#7ed9ad] text-sm font-bold disabled:opacity-50"
          >
            {{ isChecking ? "Checking..." : "Verify" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useIdentity } from "@/composables/useIdentity";

const API_IDENTIFY_URL = "https://api.jikulabs.xyz/identify";

const { setIdentity, clearIdentity } = useIdentity();

const showEntrance = ref(sessionStorage.getItem("jiku-entered") !== "true");
const identityPanelOpen = ref(false);
const identityCode = ref("");
const identityError = ref("");
const isChecking = ref(false);

function enterAsVisitor() {
  clearIdentity();

  sessionStorage.setItem("jiku-entered", "true");
  showEntrance.value = false;
}

function openIdentityPanel() {
  identityPanelOpen.value = true;
  identityError.value = "";
}

function closeIdentityPanel() {
  identityPanelOpen.value = false;
  identityCode.value = "";
  identityError.value = "";
}

async function verifyIdentity() {
  const code = identityCode.value.trim();

  if (!code || isChecking.value) return;

  isChecking.value = true;
  identityError.value = "";

  try {
    const response = await fetch(API_IDENTIFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ code })
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      identityError.value = "Invalid identity code.";
      return;
    }

    setIdentity(data.identity);

    sessionStorage.setItem("jiku-entered", "true");
    showEntrance.value = false;
  } catch (error) {
    identityError.value = "Could not verify identity right now.";
  } finally {
    isChecking.value = false;
  }
}
</script>