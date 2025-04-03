// CONTROLLER: RECEBE A REQUISIÇÃO (REQ), CHAMA O USECASE E RETORNA A RESPOSTA (RES) NA ROTA DEFINIDA 

// IMPORTAÇÕES DO USECASE
const { 
  criarNovoFilme, 
  listarFilmes, 
  editarFilme, 
  removerFilme 
} = require('../../usecase/movies.usecase');

// ----- CREATE -----
// Função que vai criar um novo filme
async function criarFilmeController(req, res) {
  try {
    const dados = req.body;
    const novoFilme = await criarNovoFilme(dados);
    res.status(201).json({ message: 'Filme criado com sucesso', filme: novoFilme });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar filme', error: error.message });
  }
}

// ----- READ -----
// Função que vai buscar os filmes
async function listarFilmesController(req, res) {
  try {
    const filmes = await listarFilmes();
    res.status(200).json(filmes);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao buscar filmes', error: error.message });
  }
}

// ----- UPDATE -----
// Função que edita um filme
async function editarFilmeController(req, res) {
  try {
    const id = Number(req.params.id);
    const novosDados = req.body;
    const filmeAtualizado = await editarFilme(id, novosDados);

    res.status(200).json({ message: 'Filme atualizado com sucesso', filme: filmeAtualizado });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar filme', error: error.message });
  }
  
}

// ----- DELETE -----
// Função que remove um filme
async function removerFilmeController(req, res) {
  try {
    const id = Number(req.params.id);
    await removerFilme(id);

    res.status(200).json({ message: 'Filme removido com sucesso' });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao remover filme', error: error.message });
  }
}

// EXPORTAÇÃO PARA USAR EM OUTROS ARQUIVOS (ROUTES)
module.exports = { 
  criarFilmeController,
  listarFilmesController,
  editarFilmeController,
  removerFilmeController
};