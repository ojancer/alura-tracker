<template>
    <div class="column is-three-quarter">
      <TaskForm  @aoAdicionarTarefa="adicionarTarefa"/>
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>Nome da Tarefa</th>
            <th>Projeto</th>
            <th>Tempo Decorrido</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tarefa, index) in tarefas" :key="index">
            <td>{{ tarefa.descricao }}</td>
            <td>{{ tarefa.projetoNome }}</td>
            <td>{{ tarefa.tempo }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskForm from '../components/TaskForm.vue';
import { useTarefasStore } from '@/stores/tarefas';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'App',
  components: {
    TaskForm,
  },
  setup() {
    const tarefasStore = useTarefasStore();
    const { tarefas } = storeToRefs(tarefasStore);
    return { tarefas };
  },
  methods: {
    adicionarTarefa() {
      // Não faz mais nada, pois a store já adiciona
    }
  }
});

</script>

<style>
  main {
    height: 100vh;
  }
</style>
