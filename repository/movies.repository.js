// REPOSITORY: COMUNICAÇÃO  DIRETA COM O BANCO DE DADOS

// IMPORTAÇÃO DO PRISMA
const {prisma} = require("./prisma.repository")

// ----- CREATE -----
// Função que salva um novo filme no banco de dados
async function salvarFilme({ titulo, descricao, diretor, ano, genero }) {
    return await prisma.movie.create({
        data: {
            titulo,
            descricao,
            diretor,
            ano,
            genero
        }
    });
}

// ----- READ -----
// Função que busca todos os registros da tabela Movie no banco de dados 
async function buscarFilmes() {
    return await prisma.movie.findMany();
}

// ----- UPDATE -----
// Função que vai atualizar um filme
async function atualizarFilme(id, dadosAtualizados) {
    return await prisma.movie.update({
        where: { id: Number(id) },
        data: dadosAtualizados
    });
}

// ----- DELETE -----
// Função que vai deletar um filme
async function deletarFilme(id) {
    return await prisma.movie.delete({
        where: { id: Number(id)}
    });
}


// EXPORTAÇÃO PARA USAR EM OUTROS ARQUIVOS (USECASE)
module.exports = { 
    salvarFilme, 
    buscarFilmes,
    atualizarFilme,
    deletarFilme,
    prisma
};
