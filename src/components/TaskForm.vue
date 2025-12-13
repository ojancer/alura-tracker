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
        <div>

        </div>    
               
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppTemporizador from './AppTemporizador.vue';

export default defineComponent({
    name: 'TaskForm',
    components: {
        AppTemporizador
    },
    emits: ['aoAdicionarTarefa'],
    data() {
        return {
            descricao: '',
        };
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number) {
            this.$emit('aoAdicionarTarefa', {
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