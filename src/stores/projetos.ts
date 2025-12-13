import { defineStore } from 'pinia';
import  IProjeto from '@/interfaces/IProjeto';

export const useProjetosStore = defineStore('projetos', {
  state: () => ({
    projetos: [] as IProjeto[],
    proximoId: 1
  }),
  actions: {
    adicionarProjeto(nome: string) {
      this.projetos.push({
        id: this.proximoId++,
        dataCriacao: new Date(),
        nome
      });
    },
    removerProjeto(id: number) {
      this.projetos = this.projetos.filter(p => p.id !== id);
    },
    editarProjeto(id: number, nome: string) {
      const projeto = this.projetos.find(p => p.id === id);
      if (projeto) {
        projeto.nome = nome;
      }
    }
  }
});
