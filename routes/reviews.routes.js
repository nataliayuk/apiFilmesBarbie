// DEFINE AS ROTAS QUE SERÃO SEGUIDAS NO INDEX

// IMPORTAÇÃO DO EXPRESS
// Isso só carrega o "molde", ainda não criei nada
const express = require('express');

// Isso sim cria uma instância de roteador a partir do molde
const router = express.Router();

// IMPORTAÇÕES DO CONTROLLER
const { 
    criarReviewController, 
    listarReviewsController, 
    editarReviewController, 
    removerReviewController
} = require('../controllers/reviews.controller');

// ----- ROTAS -----
// Rota POST para criar nova review (CREATE)
router.post('/', criarReviewController); 
// Rota GET para buscar as reviews (READ)
router.get('/', listarReviewsController);
// Rota PUT para editar uma review (UPDATE)
router.put('/:id', editarReviewController);
// Rota DELETE para remover uma review (DELETE)
router.delete('/:id', removerReviewController);

// EXPORTAÇÃO PARA USAR EM OUTROS ARQUIVOS (INDEX)
module.exports = router;