import { ref, computed } from "vue";

const currentLanguage = ref(localStorage.getItem("language") || "en");

export function useLanguage() {
  function setLanguage(language) {
    currentLanguage.value = language;
    localStorage.setItem("language", language);
  }

  function toggleLanguage() {
    setLanguage(currentLanguage.value === "fr" ? "en" : "fr");
  }

  const isFrench = computed(() => currentLanguage.value === "fr");

  return {
    currentLanguage,
    isFrench,
    setLanguage,
    toggleLanguage
  };
}