<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário de cadastro de tarefa">
                <input type="text" class="input" placeholder="Descrição da tarefa" />
            </div>
            <div class="column">
                <AppTemporizador />
            </div>
        </div>    
                
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppCronometro from './AppCronometro.vue';
import AppTemporizador from './AppTemporizador.vue';

export default defineComponent({
    name: 'TaskForm',
    components: {
        AppTemporizador
    },
});
</script>

<style scoped>
</style>