import { computed, ref } from "vue";

const storedIdentity = localStorage.getItem("jiku-identity");

const identity = ref(
  storedIdentity
    ? JSON.parse(storedIdentity)
    : {
        role: "visitor",
        name: "Visitor",
        relationship: "new visitor"
      }
);

export function useIdentity() {
  const isOwner = computed(() => identity.value.role === "owner");

  function setIdentity(newIdentity) {
    identity.value = newIdentity;
    localStorage.setItem("jiku-identity", JSON.stringify(newIdentity));
  }

  function clearIdentity() {
    identity.value = {
      role: "visitor",
      name: "Visitor",
      relationship: "new visitor"
    };

    localStorage.removeItem("jiku-identity");
  }

  return {
    identity,
    isOwner,
    setIdentity,
    clearIdentity
  };
}