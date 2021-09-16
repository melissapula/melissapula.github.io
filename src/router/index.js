import Vue from "vue";
import VueRouter from "vue-router";
import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";
import About from "../pages/about.vue";
import Home from "../pages/home.vue";
import FishCreek from "../pages/fishCreek.vue";
import Resume from "../pages/resume";
import Pacific from "../pages/pacific";
import BugsGame from "../pages/bugsGame";
import JavaJam from "../pages/javaJam";
import Hangman from "../pages/hangman";
import ParentingBlog from "../pages/parentingBlog";
import FitnessBlog from "../pages/fitnessBlog";

Vue.use(PerfectScrollbar);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/fishcreek",
    name: "FishCreek",
    component: FishCreek
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume
  },
  {
    path: "/pacific",
    name: "Pacific",
    component: Pacific
  },
  {
    path: "/bugsGame",
    name: "BugsGame",
    component: BugsGame
  },
  {
    path: "/javaJam",
    name: "JavaJam",
    component: JavaJam
  },
  {
    path: "/hangman",
    name: "Hangman",
    component: Hangman
  },
  {
    path: "/parentingBlog",
    name: "ParentingBlog",
    component: ParentingBlog
  },
  {
    path: "/fitnessBlog",
    name: "FitnessBlog",
    component: FitnessBlog
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
