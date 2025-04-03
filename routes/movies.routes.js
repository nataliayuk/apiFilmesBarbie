// DEFINE AS ROTAS QUE SERÃO SEGUIDAS NO INDEX

// IMPORTAÇÃO DO EXPRESS
// Express é uma biblioteca/framework para criar servidores (só funciona porque rodei npm init -y e npm install express)
const express = require('express');

// Cria o roteador (permite criar rotas separadas do app principal)
// Mini-servidor de rotas só para filmes
const router = express.Router();

// IMPORTAÇÕES DO CONTROLLER
const { 
    criarFilmeController, 
    listarFilmesController, 
    editarFilmeController, 
    removerFilmeController
} = require('../controllers/movies.controller');

// ----- ROTAS -----
// Rota POST para criar novo filme (CREATE)
router.post('/', criarFilmeController); 
// Rota GET para buscar os filmes (READ)
router.get('/', listarFilmesController);
router.get('/:id', listarFilmesController);
// Rota PUT para editar um filme (UPDATE)
router.put('/:id', editarFilmeController);
// Rota DELETE para remover um filme (DELETE)
router.delete('/:id', removerFilmeController);

// EXPORTAÇÃO PARA USAR EM OUTROS ARQUIVOS (INDEX)
module.exports = router;