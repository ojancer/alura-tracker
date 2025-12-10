<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <AppCronometro :tempoEmSegundos="tempoEmSegundos" />
        <button class="button" @click="iniciar" :disabled="cronometroRodando">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="finalizar" :disabled="!cronometroRodando">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>

<script lang="ts">  
import { defineComponent } from 'vue';
import AppCronometro from './AppCronometro.vue';

export default defineComponent({
    name: 'AppTemporizador',
    components: {
        AppCronometro,
    },
    emits: ["aoTemporizadorFinalizado"],
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: null as ReturnType<typeof setInterval> | null,
            cronometroRodando: false
        };
    },
    methods: {
        iniciar() {
            this.cronometroRodando = true;
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1;
            }, 1000);
        }, 
        finalizar() { 
            if (this.cronometro) {
            clearInterval(this.cronometro)
            this.$emit("aoTemporizadorFinalizado", this.tempoEmSegundos);
            this.cronometro = null;
            this.tempoEmSegundos = 0;
            this.cronometroRodando = false;
            }
        }
    }    
});
</script>
