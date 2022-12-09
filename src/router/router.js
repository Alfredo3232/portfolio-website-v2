import { createRouter, createWebHistory } from "vue-router";

import blogRoutes from "./blogRoutes.js";
import toyProblemsRoutes from "./toyProblemsRoutes.js";

import ContactPage from "../pages/ContactPage.vue";
import GamesPage from "../pages/GamesPage.vue";
import PortfolioPage from "../pages/PortfolioPage.vue";
import ResumePage from "../pages/ResumePage.vue";
import SkillsPage from "../pages/SkillsPage.vue";
import HomePage from "../pages/HomePage.vue";

let baseRoutes = [
  { path: "/", component: HomePage },
  { path: "/portfolio", component: PortfolioPage },
  { path: "/skills", component: SkillsPage },
  { path: "/contact", component: ContactPage },
  { path: "/resume", component: ResumePage },
  { path: "/games", component: GamesPage },
];

let routes1 = baseRoutes.concat(blogRoutes);
let routes2 = routes1.concat(toyProblemsRoutes);

let router = createRouter({
  history: createWebHistory(),
  routes: routes2,
  linkActiveClass: "current"
});

export default router;