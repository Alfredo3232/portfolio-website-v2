import { createRouter, createWebHistory } from "vue-router";

// routes imports
import blogRoutes from "./blogRoutes.js";
import toyProblemsRoutes from "./toyProblemsRoutes.js";

// pages imports
import ContactPage from "../pages/ContactPage.vue";
import GamesPage from "../pages/GamesPage.vue";
import PortfolioPage from "../pages/PortfolioPage.vue";
import ResumePage from "../pages/ResumePage.vue";
import SkillsPage from "../pages/SkillsPage.vue";
import HomePage from "../pages/HomePage.vue";

// routes arrays
let baseRoutes = [
  { component: HomePage, path: "/", },
  { component: PortfolioPage, path: "/portfolio" },
  { component: SkillsPage, path: "/skills" },
  { component: ContactPage, path: "/contact" },
  { component: ResumePage, path: "/resume" },
  { component: GamesPage, path: "/games" },
];

let routes1 = baseRoutes.concat(blogRoutes);
let routes2 = routes1.concat(toyProblemsRoutes);

// router object
let router = createRouter({
  history         : createWebHistory(),
  linkActiveClass : "current",
  routes          : routes2,
});

export default router;