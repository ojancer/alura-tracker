<template>
    <header>
        <h1>
            Alura Tracker
            <i class="fa-solid fa-location-crosshairs"></i>
        </h1>
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
</style>