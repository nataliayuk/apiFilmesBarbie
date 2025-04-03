// CONEXÃO COM O BANCO DE DADOS
const { PrismaClient } = require('@prisma/client'); 
const prisma = new PrismaClient();

module.exports = {
    prisma
}