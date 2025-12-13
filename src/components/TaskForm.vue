<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário de cadastro de tarefa">
                <input type="text" class="input" placeholder="Descrição da tarefa" v-model="descricao"/>
            </div>
            <div class="column">
                <AppTemporizador @aoTemporizadorFinalizado="finalizarTarefa" :podeIniciar="podeIniciar"/>
            </div>
        </div>
        <div class="field">
            <label class="label">Projeto</label>
            <div class="control">
                <select class="input" v-model="projetoSelecionadoId">
                    <option disabled value="">Selecione um projeto</option>
                    <option v-for="projeto in projetos" :key="projeto.id" :value="projeto.id">
                        {{ projeto.nome }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import AppTemporizador from './AppTemporizador.vue';
import { useProjetosStore } from '@/stores/projetos';
import { useTarefasStore } from '@/stores/tarefas';
import type IProjeto from '@/interfaces/IProjeto';

export default defineComponent({
    name: 'TaskForm',
    components: {
        AppTemporizador
    },
    emits: ['aoAdicionarTarefa'],
    data() {
        return {
            descricao: '',
            projetoSelecionadoId: '' as string,
        };
    },
    computed: {
        projetos(): IProjeto[] {
            const store = useProjetosStore();
            return store.projetos;
        },
        podeIniciar(): boolean {
            return (
                this.descricao.trim() !== '' &&
                this.projetoSelecionadoId !== '' &&
                this.projetos.length > 0
            );
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number) {
            const projeto = this.projetos.find(p => p.id === Number(this.projetoSelecionadoId));
            if (!projeto) return;
            const tarefa = {
                descricao: this.descricao,
                tempo: new Date(tempoDecorrido * 1000).toISOString().substr(11, 8),
                projetoId: projeto.id,
                projetoNome: projeto.nome
            };
            const tarefasStore = useTarefasStore();
            tarefasStore.adicionarTarefa(tarefa);
            this.$emit('aoAdicionarTarefa', tarefa);
            this.descricao = '';
            this.projetoSelecionadoId = '';
        }
    }
});
</script>

<style scoped>
</style>