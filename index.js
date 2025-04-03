// Arquivo principal da aplicação (servidor)
// Pode ser chamado de qualquer coisa, mas normalmente é index.js ou app.js
// É o ponto de entrada da aplicação (é o arquivo que eu rodei no terminal com o comando node index.js)
// Tipo o coração da aplicação (é o arquivo que inicia o servidor e conecta as rotas, controllers, usecases e repository)
// "Delega" as responsabilidades para os outros arquivos, mas conecta tudo 

// IMPORTAÇÕES E CONFIGURAÇÕES INICIAIS
const express = require('express'); //importa o express (express é uma biblioteca/framework para criar servidores) (só funciona porque rodei npm init -y e npm install express)
const app = express(); //cria a aplicação express (chamo a função principal do express e ela retorna um objeto que representa a aplicação [API])
const PORT = 3000; //define a porta que o servidor vai rodar (pode ser qualquer número entre 0 e 65535, mas normalmente é 3000 ou 8080)

// MIDDLEWARES
app.use(express.json()); //permite que o servidor entenda os dados enviados em json

// ----- ROTAS -----
// Filmes
const filmesRoutes = require('./routes/movies.routes'); //importa o arquivo movies.routes.js (que contém as rotas de filmes) (o caminho é relativo ao arquivo index.js)
app.use('/filmes', filmesRoutes); //configura o servidor para usar as rotas de filmes (o prefixo /filmes significa que todas as rotas definidas em movies.routes.js vão começar com /filmes) (ex: se eu definir uma rota /teste em movies.routes.js, a rota final vai ser /filmes/teste)

// Reviews
const reviewRoutes = require('./routes/reviews.routes');
app.use('/reviews', reviewRoutes);

// INICIALIZAÇÃO DO SERVIDOR
app.listen(PORT, () => { //inicia o servidor na porta 3000 (que defini lá em cima)
    console.log(`Servidor rodando em http://localhost:${PORT}`); //console de confirmação que vai aparecer no terminal quando a API estiver rodando (escrevi node index.js no terminal e apareceu!)
});