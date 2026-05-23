import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: 'Home' }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../pages/about.vue'),
        meta: { title: 'About' }
    },
    {
        path: '/resume',
        name: 'Resume',
        component: () => import('../pages/resume.vue'),
        meta: { title: 'Resume' }
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: () => import('../pages/portfolio.vue'),
        meta: { title: 'Projects' }
    },
    {
        path: '/python',
        name: 'PythonCode',
        component: () => import('../pages/pythonCode.vue'),
        meta: { title: 'Python' }
    },
    {
        path: '/data',
        name: 'DataAnalysis',
        component: () => import('../pages/dataAnalysis.vue'),
        meta: { title: 'Data Analysis' }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../pages/contact.vue'),
        meta: { title: 'Contact' }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../pages/notFound.vue'),
        meta: { title: 'Page Not Found' }
    }
];

const SITE_NAME = 'Melissa Freundschuh-Pula';

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.afterEach((to) => {
    const pageTitle = to.meta?.title;
    document.title = pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_NAME;
});

export default router;
