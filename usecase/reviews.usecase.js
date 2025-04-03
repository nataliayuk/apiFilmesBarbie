// USECASE: DEFINE AS REGRAS DE NEGÓCIO

// IMPORTAÇÕES DO REPOSITORY
const { 
    salvarReview, 
    buscarReviews, 
    buscarReviewPorId,
    atualizarReview, 
    deletarReview 
} = require('../repository/reviews.repository');

// ----- CREATE -----
// Função que vai receber os dados da review que o usuário enviou
async function criarNovaReview(dados) {
    const { avaliacao, idFilme } = dados;

    // Regra de negócio: avaliação e idFilme tem que ser números
    if (avaliacao === undefined || typeof avaliacao !== 'number' || avaliacao < 1 || avaliacao > 5) {
        throw new Error("Avalie o filme de 1 a 5 estrelas.");
    }
    if (!idFilme || typeof idFilme !== 'number') {
        throw new Error("ID do filme inválida.");
    }

    return await salvarReview(dados);
}

// ----- READ -----
// Função que lista as reviews do banco de dados
async function listarReviews() {
    return await buscarReviews();
}

// Função que busca uma review específica
async function listarReviewPorId(id) {

    // Regra de negócio: id tem que ser número
    if (!id || typeof id !== 'number') {
        throw new Error("ID da review inválida.");
    }

    return await buscarReviewPorId(id);
}

// ----- UPDATE -----
// Função para editar uma review
async function editarReview(id, novosDados) {
    const { avaliacao, idFilme } = novosDados;

    // Regra do negócio: deve informar a id da review, que tem que ser número; 
    // Se for atualizar a avaliação ou o idFilme, tem que ser número e seguir as regras (1 e 5)
    if (avaliacao !== undefined && (typeof avaliacao !== 'number' || avaliacao < 1 || avaliacao > 5)) {
        throw new Error("Avalie o filme de 1 a 5 estrelas.");
    }
    if (!id || typeof id !== 'number') {
        throw new Error("ID da review inválida.");
    }
    if (!idFilme !== undefined && typeof idFilme !== 'number') {
        throw new Error("ID do filme inválida.");
    }

    return await atualizarReview(id, novosDados);
}

// ----- DELETE -----
// Função para deletar uma review
async function removerReview(id) {
    
    // Regra do negócio: tem que informar a id da review, que tem que ser um número
    if (!id || typeof id !== 'number') {
        throw new Error("ID da review é obrigatória.")
    }
    
    return await deletarReview(id);
}

// EXPORTAÇÃO PARA USAR EM OUTROS ARQUIVOS (CONTROLLER)
module.exports = { 
    criarNovaReview, 
    listarReviews,
    listarReviewPorId,
    editarReview,
    removerReview
};