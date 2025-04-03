// USECASE: DEFINE AS REGRAS DE NEGÓCIO

// IMPORTAÇÕES DO REPOSITORY
const { 
    salvarFilme, 
    buscarFilmes, 
    buscarFilmePorId,
    atualizarFilme, 
    deletarFilme 
} = require('../repository/movies.repository');

// ----- CREATE -----
// Função que vai receber os dados do filme que o usuário enviou
async function criarNovoFilme(dados) {
    const { titulo, descricao, diretor, ano, genero } = dados;
    
    // Regra de negócio: título e ano são obrigatórios
    if (!titulo || !descricao || !diretor || !ano || !genero) {
        throw new Error("Todos os dados são obrigatórios.");
    }
    if (typeof ano !== 'number' || ano > new Date().getFullYear()) {
        throw new Error("Ano inválido.");
    }

    return await salvarFilme(dados);
}

// ----- READ -----
// Função que lista os filmes do banco de dados
async function listarFilmes() {
    return await buscarFilmes();
}

// Função que busca um filme específico
async function listarFilmePorId(id) {

    // Regra de negócio: id tem que ser número
    if (!id || typeof id !== 'number') {
        throw new Error("ID do filme inválida.");
    }

    return await buscarFilmePorId(id);
}

// ----- UPDATE -----
// Função para editar um filme
async function editarFilme(id, novosDados) {
    const { ano } = novosDados;
   
    // Regra de negócio: id e ano tem que ser números e ano não pode ser no futuro
    if (!id || typeof id !== 'number') {
        throw new Error("ID do filme inválida.");
    }
    if (ano !== undefined && (typeof ano !== 'number' || ano > new Date().getFullYear())) {
        throw new Error("Ano inválido.");
    }

    return await atualizarFilme(id, novosDados);
}

// ----- DELETE -----
// Função para deletar um filme
async function removerFilme(id) {
    
    // Regra de negócio: tem que ter id e tem que ser um número
    if (!id || typeof id !== 'number') {
        throw new Error("ID do filme é obrigatória.")
    }

    return await deletarFilme(id);
}

// EXPORTAÇÃO PARA USAR EM OUTROS ARQUIVOS (CONTROLLER)
module.exports = { 
    criarNovoFilme, 
    listarFilmes,
    listarFilmePorId,
    editarFilme,
    removerFilme
};