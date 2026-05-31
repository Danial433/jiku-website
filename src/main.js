import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";

import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";

import App from "./App.vue";
import router from "./router";

import { Icon } from "@iconify/vue";
import Separator from "./components/Separator.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(MotionPlugin);

app.use(Particles, {
  init: async (engine) => {
    await loadSlim(engine);
  },
});

app.component("Separator", Separator);
app.component("Icon", Icon);

app.mount("#app");