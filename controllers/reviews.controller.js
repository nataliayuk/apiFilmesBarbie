// CONTROLLER: RECEBE A REQUISIÇÃO (REQ), CHAMA O USECASE E RETORNA A RESPOSTA (RES) NA ROTA DEFINIDA 

// IMPORTAÇÕES DO USECASE
const { 
    criarNovaReview, 
    listarReviews, 
    editarReview, 
    removerReview 
  } = require('../../usecase/reviews.usecase');
  
  // ----- CREATE -----
  // Função que vai criar uma nova review (com dados enviados pelo usuário)
  async function criarReviewController(req, res) {
    try {
      const dados = req.body;
      const novaReview = await criarNovaReview(dados);
      res.status(201).json({ message: 'Review criada com sucesso', review: novaReview });
    } catch (error) {
      res.status(400).json({ message: 'Erro ao criar review', error: error.message });
    }
  }
  
  // ----- READ -----
  // Função que vai buscar todas as reviews
  async function listarReviewsController(req, res) {
    try {
      const reviews = await listarReviews();
      res.status(200).json(reviews);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao buscar reviews', error: error.message });
    }
  }
  
  // ----- UPDATE -----
  // Função que edita uma review existente (com os novos dados recebidos)
  async function editarReviewController(req, res) {
    try {
      const id = Number(req.params.id);
      const novosDados = req.body;
      const reviewAtualizada = await editarReview(id, novosDados);
  
      res.status(200).json({ message: 'Review atualizada com sucesso', review: reviewAtualizada });
    } catch (error) {
      res.status(400).json({ message: 'Erro ao atualizar review', error: error.message });
    }
    
  }
  
  // ----- DELETE -----
  // Função que remove uma review
  async function removerReviewController(req, res) {
    try {
      const id = Number(req.params.id);
      await removerReview(id);
  
      res.status(200).json({ message: 'Review removida com sucesso' });
    } catch (error) {
      res.status(400).json({ message: 'Erro ao remover review', error: error.message });
    }
  }
  
  // EXPORTAÇÃO PARA USAR EM OUTROS ARQUIVOS (ROUTES)
  module.exports = { 
    criarReviewController,
    listarReviewsController,
    editarReviewController,
    removerReviewController
  };