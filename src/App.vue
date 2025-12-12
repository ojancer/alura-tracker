<template>
   <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <TaskForm  @aoAdicionarTarefa="adicionarTarefa"/>
      <div class="lista">
        <AppList v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
      </div>
    </div>

  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import TaskForm from './components/TaskForm.vue';
import AppList from './components/AppList.vue';
import IAppList from './interfaces/IAppList';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    TaskForm,
    AppList
  },
  data() {
    return {
      tarefas: [] as IAppList[]
    };
  },
  methods: {
    adicionarTarefa(tarefa: IAppList) {
      this.tarefas.push(tarefa);
    }
  }   
});

</script>

<style>
  main {
    height: 100vh;
  }
</style>
