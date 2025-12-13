import Tarefas from '@/views/Tarefas.vue';
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

const rotas: RouteRecordRaw[] = [{
    path: '/',
    name: 'Tarefas',
    component: Tarefas
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default router;