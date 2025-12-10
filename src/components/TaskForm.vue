<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário de cadastro de tarefa">
                <input type="text" class="input" placeholder="Descrição da tarefa" v-model="descricao"/>
            </div>
            <div class="column">
                <AppTemporizador @aoTemporizadorFinalizado="finalizarTarefa"/>
            </div>
        </div>    
        <div v-for="tarefa in tarefas" :key="tarefa.descricao">
                <p>{{ tarefa.descricao }} - {{ tarefa.tempo }} segundos</p>
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
    data() {
        return {
            descricao: '',
            tarefas: [] as Array<{ descricao: string; tempo: number }>,
        };
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number) {
            this.tarefas.push({
                descricao: this.descricao,
                tempo: tempoDecorrido
            });
            this.descricao = '';
            
        }
    }
});
</script>

<style scoped>
</style>