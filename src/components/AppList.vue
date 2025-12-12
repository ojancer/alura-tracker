<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
               {{ tarefa.descricao }}
            </div>
            <Div class="column">
                <AppCronometro :tempoEmSegundos="tarefa.tempo" />
            </Div>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import AppCronometro from './AppCronometro.vue';
import IAppList from '@/interfaces/IAppList';

export default defineComponent({
    name: 'AppList',
    components: {
        AppCronometro
    },
    props: {
       tarefa: {
           type: Object as PropType<IAppList>,
           required: true
       }
    }
});


</script>

<style scoped>
    .box {
        padding: 15px;
        margin: 1.5rem;
        background-color: #414141;
        color: #d9d9d9;
    }   
</style>