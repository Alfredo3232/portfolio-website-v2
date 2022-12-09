import { createApp } from "vue";

import App from "./App.vue";
import router from "./router/router.js";

import NavBar from "./components/NavBar.vue";

let app = createApp(App);

app.use(router);

app.component("nav-bar", NavBar);

app.mount("#app");
