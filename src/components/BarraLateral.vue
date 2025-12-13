<template>
    <header>
        <h1>
            Alura Tracker
            <i class="fa-solid fa-location-crosshairs"></i>
        </h1>
        <nav class="panel mt-5">
            <ul>
                <li>
                    <router-link to="/projetos" class="link">
                        <i class="fas fa-project-diagram"></i>
                        Projetos
                    </router-link>
                </li>
                <hr style="padding: 0; margin: 5px;">
                <li>
                    <router-link to="/" class="link">
                        <i class="fas fa-tasks"></i>
                        Tarefas
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'BarraLateral',
});
</script>

<style scoped>
header {
    padding: 1rem;
    background: #414141;
    width: 100%;
    height: 100vh;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}

h1 {
    color: #d9d9d9;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

nav {
    margin: 3px;
    padding: 5px;
    display: flex;
    justify-content: center;
}
.panel li {
    margin: 5px;
}

.link {
    color: #fff;
}

.link:hover {
    color: #FAF0CA;
}

.link.router-link-active {
    color: #FAF0CA;
}
</style>