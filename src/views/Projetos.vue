<template>
    <section class="projetos">
        <H1 class="title">Projetos</H1>
        <form @submit.prevent="adicionarProjeto">
            <div class="field">
                <label for="nomeProjeto">Nome do Projeto:</label>
                <input type="text" class="input" id="nomeProjeto" v-model="nomeProjeto" />
            </div>
            <div class="field">
                <button type="submit" class="button">Adicionar Projeto</button>
            </div>
        </form>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome do Projeto</th>
                    <th>Data de Criação</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>{{ projeto.id }}</td>
                    <td>{{ projeto.nome }}</td>
                    <td>{{ projeto.dataCriacao.toLocaleString() }}</td>
                </tr>
            </tbody>

        </table>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useProjetosStore } from '@/stores/projetos';
import { storeToRefs } from 'pinia';

export default defineComponent({
    name: 'Projetos',
    data() {
        return {
            nomeProjeto: ''
        };
    },
    setup() {
        const projetosStore = useProjetosStore();
        const { projetos } = storeToRefs(projetosStore);
        return { projetos, projetosStore };
    },
    methods: {
        adicionarProjeto() {
            if (this.nomeProjeto.trim()) {
                this.projetosStore.adicionarProjeto(this.nomeProjeto.trim());
                this.nomeProjeto = '';
            }
        }
    }
});
</script>

<style scoped>
.projetos {
    margin: 0 auto;
    padding: 1rem;
}
</style>