import { createApp } from "vue";

// use imports
import App from "./App.vue";
import router from "./router/router.js";

// component imports
import NavBar from "./components/NavBar.vue";

const app = createApp(App);

app.use(router);

app.component("nav-bar", NavBar);

app.mount("#app");