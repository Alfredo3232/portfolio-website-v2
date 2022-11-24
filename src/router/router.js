import { createRouter, createWebHistory } from 'vue-router';

import BlogPage from '../pages/BlogPage.vue';
import ContactPage from '../pages/ContactPage.vue';
import GamesPage from '../pages/GamesPage.vue';
import PortfolioPage from '../pages/PortfolioPage.vue';
import ResumePage from '../pages/ResumePage.vue';
import SkillsPage from '../pages/SkillsPage.vue';
import ToyProblemsPage from '../pages/ToyProblemsPage.vue';
import HomePage from '../pages/HomePage.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/portfolio', component: PortfolioPage },
    { path: '/skills', component: SkillsPage },
    { path: '/contact', component: ContactPage },
    { path: '/resume', component: ResumePage },
    { path: '/toyProblems', component: ToyProblemsPage },
    { path: '/blog', component: BlogPage },
    { path: '/games', component: GamesPage }
  ],
  linkActiveClass: 'current'
});

export default router;