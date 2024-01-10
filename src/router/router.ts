import Main from "@/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import PostsPage from "@/pages/PostsPage.vue";
import About from "@/pages/About.vue";
import PostPage from "@/pages/PostPage.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts',
        component: PostsPage
    },
    {
        path: '/posts/:id',
        component: PostPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;