import { createRouter, createWebHistory } from "vue-router";

// pages imports
import ContactPage from "../pages/ContactPage.vue";
import PortfolioPage from "../pages/PortfolioPage.vue";
import SkillsPage from "../pages/SkillsPage.vue";
import HomePage from "../pages/HomePage.vue";

// routes arrays
let baseRoutes = [
    { component: HomePage, path: "/" },
    { component: PortfolioPage, path: "/portfolio" },
    { component: SkillsPage, path: "/skills" },
    { component: ContactPage, path: "/contact" }
];

// router object
let router = createRouter({
    history         : createWebHistory(),
    linkActiveClass : "current",
    routes          : baseRoutes
});

export default router;
