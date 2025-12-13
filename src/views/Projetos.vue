<template>
    <div class="projetos">
        <div class="projetos-header">
            <h1>Projetos</h1>
            <button @click="abrirFormulario" class="btn-novo">
                Novo Projeto
            </button>
        </div>

        <div class="projetos-lista">
            <div v-if="projetos.length === 0" class="vazio">
                <p>Nenhum projeto encontrado</p>
            </div>
            
            <div v-else class="grid">
                <div 
                    v-for="projeto in projetos" 
                    :key="projeto.id"
                    class="projeto-card"
                >
                    <h3>{{ projeto.nome }}</h3>
                    <p>{{ projeto.descricao }}</p>
                    <div class="acoes">
                        <button @click="editar(projeto.id)" class="btn-editar">
                            Editar
                        </button>
                        <button @click="deletar(projeto.id)" class="btn-deletar">
                            Deletar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projetos',
    data() {
        return {
            projetos: []
        }
    },
    methods: {
        abrirFormulario() {
            // Implementar abertura do formulário
        },
        editar(id) {
            // Implementar edição
        },
        deletar(id) {
            // Implementar deleção
        }
    },
    mounted() {
        // Carregar projetos
    }
}
</script>

<style scoped>
.projetos {
    padding: 20px;
}

.projetos-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.projeto-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.acoes {
    display: flex;
    gap: 10px;
    margin-top: 15px;
}

.btn-novo, .btn-editar, .btn-deletar {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn-novo {
    background-color: #28a745;
    color: white;
}

.btn-editar {
    background-color: #007bff;
    color: white;
}

.btn-deletar {
    background-color: #dc3545;
    color: white;
}

.vazio {
    text-align: center;
    padding: 40px;
}
</style>