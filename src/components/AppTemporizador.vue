<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <AppCronometro :tempoEmSegundos="tempoEmSegundos" />
        <div class="tooltip-wrapper" style="display: inline-block; position: relative;">
            <button
                class="button"
                @click="tentarIniciar"
                :disabled="cronometroRodando || !podeIniciar"
                @mouseenter="mostrarTooltip = !podeIniciar"
                @mouseleave="mostrarTooltip = false"
            >
                <span class="icon">
                    <i class="fas fa-play"></i>
                </span>
                <span>play</span>
            </button>
            <div v-if="mostrarTooltip && !podeIniciar" class="custom-tooltip">
                Preencha a descrição e selecione o projeto para iniciar a tarefa
            </div>
        </div>
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
    emits: ["aoTemporizadorFinalizado", "tentarIniciar"],
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: null as ReturnType<typeof setInterval> | null,
            cronometroRodando: false,
            mostrarTooltip: false
        };
    },
    props: {
        podeIniciar: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        tentarIniciar() {
            if (this.podeIniciar) {
                this.iniciar();
            } else {
                this.$emit('tentarIniciar');
            }
        },
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
<style scoped>
    .custom-tooltip {
        position: absolute;
        left: 50%;
        top: 110%;
        transform: translateX(-50%);
        background: #363636;
        color: #fff;
        padding: 6px 12px;
        border-radius: 4px;
        font-size: 0.80vw;
        white-space: nowrap;
        z-index: 10;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        pointer-events: none;
    }
</style>
