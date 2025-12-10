<template>
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
</template>

<script lang="ts">  
import { defineComponent } from 'vue';
import AppCronometro from './AppCronometro.vue';

export default defineComponent({
    name: 'AppTemporizador',
    components: {
        AppCronometro,
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
