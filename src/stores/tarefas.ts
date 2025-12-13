import { defineStore } from 'pinia';

export interface ITarefa {
  descricao: string;
  tempo: string;
  projetoId: number;
  projetoNome: string;
}

export const useTarefasStore = defineStore('tarefas', {
  state: () => ({
    tarefas: [] as ITarefa[]
  }),
  actions: {
    adicionarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
    removerTarefa(index: number) {
      this.tarefas.splice(index, 1);
    }
  }
});
