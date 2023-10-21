import { createRouter, createWebHistory } from "vue-router";

import Home from './components/Home.vue'
import AddTask from './components/AddTask.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/Home', component: Home, alias: '/'},
        {path: '/addTask', component: AddTask}
    ]
})