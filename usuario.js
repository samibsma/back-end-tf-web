
const express = require('express');
const router = express.Router();

// Cadastrar novo usuário
router.post('/usuario', (req, res) => {
  // Implementação do código para cadastrar um novo usuário no banco de dados
});

// Listar todos os usuários e suas respectivas informações
router.get('/usuario', (req, res) => {
  // Implementação do código para listar todos os usuários e suas informações do banco de dados
});

// Listar as informações de apenas um usuário
router.get('/usuario/:id', (req, res) => {
  // Implementação do código para listar as informações de um usuário específico do banco de dados
});

// Alterar as informações de um usuário identificado
router.put('/usuario/:id', (req, res) => {
  // Implementação do código para alterar as informações de um usuário específico no banco de dados
});

// Excluir as informações de um usuário identificado
router.delete('/usuario/:id', (req, res) => {
  // Implementação do código para excluir as informações de um usuário específico do banco de dados
});


module.exports = router;


