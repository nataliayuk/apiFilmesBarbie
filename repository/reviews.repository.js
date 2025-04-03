// IMPORTAÇÃO DO PRISMA
const {prisma} = require("./prisma.repository")

// ----- CREATE -----
// Função que salva uma nova review no banco de dados
async function salvarReview({ conteudo, avaliacao, idFilme }) {
    return await prisma.review.create({
        data: {
            conteudo,
            avaliacao,
            idFilme,
        }
    });
}

// ----- READ -----
// Função que busca todos os registros da tabela Review no banco de dados 
async function buscarReviews() {
    return await prisma.review.findMany();
}

// ----- UPDATE -----
// Função que vai atualizar uma review
async function atualizarReview (id, dadosAtualizados) {
    return await prisma.review.update({
        where: { id: Number(id) },
        data: dadosAtualizados
    });
}

// ----- DELETE -----
// Função que vai deletar uma review
async function deletarReview(id) {
    return await prisma.review.delete({
        where: { id: Number(id)}
    });
}

// EXPORTAÇÃO PARA USAR EM OUTROS ARQUIVOS (USECASE)
module.exports = {
    salvarReview,   
    buscarReviews,
    atualizarReview,
    deletarReview
}
