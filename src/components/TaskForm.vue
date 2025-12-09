<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário de cadastro de tarefa">
                <input type="text" class="input" placeholder="Descrição da tarefa" />
            </div>
            <div class="column">
                <div class="is-flex is-align-items-center is-justify-content-space-between">
                   <AppCronometro :tempoEmSegundos="tempoEmSegundos" />
                    <button class="button" @click="iniciar">
                        <span class="icon">
                            <i class="fas fa-play"></i>
                        </span>
                        <span>play</span>
                    </button>
                    <button class="button" @click="finalizar">
                        <span class="icon">
                            <i class="fas fa-stop"></i>
                        </span>
                        <span>stop</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppCronometro from './AppCronometro.vue';

export default defineComponent({
    name: 'TaskForm',
    components: {
        AppCronometro
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: null as ReturnType<typeof setInterval> | null
        };
    },
    methods: {
        iniciar() {
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1;
            }, 1000);
        }, 
        finalizar() { 
            if (this.cronometro) {
            clearInterval(this.cronometro)
            this.cronometro = null;
            this.tempoEmSegundos = 0;
            }
        }
    }    
});
</script>

<style scoped>
</style>