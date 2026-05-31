import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";

import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";

import App from "./App.vue";
import router from "./router";

import { Icon, addCollection } from "@iconify/vue";
import mingcuteIcons from "@iconify-json/mingcute/icons.json";
import deviconIcons from "@iconify-json/devicon/icons.json";
import logosIcons from "@iconify-json/logos/icons.json";

import Separator from "./components/Separator.vue";

addCollection(mingcuteIcons);
addCollection(deviconIcons);
addCollection(logosIcons);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(MotionPlugin);

Particles(app, {
  init: async (engine) => {
    await loadSlim(engine);
  },
});

app.component("Separator", Separator);
app.component("Icon", Icon);

app.mount("#app");