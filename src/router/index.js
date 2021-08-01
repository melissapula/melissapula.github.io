import Vue from "vue";
import Router from "vue-router";
import NotFound from "@/pages/404";
import About from "@/pages/about";
//import Dashboard from "@/pages/Dashboard";

Vue.use(Router);

const router = new Router({
    routes: [
        /*{
            path: "/adminrecoveryexec",
            name: "AdminRecoveryEXEC",
            component: AdminRecoveryEXEC,
        },*/
        {
            path: "/notfound",
            name: "404",
            component: NotFound,
        },
        {
            path: "/about",
            name: "about",
            component: About,
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (!to.matched.length) {
        next("/notfound");
    }
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (localStorage.getItem("token") === null) {
            next({
                name: "Login",
                params: { nextUrl: to.fullPath },
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;