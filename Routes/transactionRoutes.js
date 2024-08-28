const express = require('express');
const transactionController = require('../Controllers/transactionController');
const authMiddleware = require('../Middleware/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /transaction:
 *   post:
 *     summary: Cria uma nova transação
 *     tags: [Transaction]
 *     security:
 *       - bearerAuth: []  
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               card_number:
 *                 type: string
 *                 example: "1234123412341234"
 *               value:
 *                 type: integer
 *                 example: 7990
 *               cvv:
 *                 type: integer
 *                 example: 789
 *               card_holder_name:
 *                 type: string
 *                 example: "Luke Skywalker"
 *               exp_date:
 *                 type: string
 *                 example: "12/24"
 *     responses:
 *       201:
 *         description: Transação criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 value:
 *                   type: integer
 *                   example: 7990
 *                 lastFourDigits:
 *                   type: string
 *                   example: "1234"
 *                 cardHolderName:
 *                   type: string
 *                   example: "Luke Skywalker"
 *                 dateTime:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-08-24T12:00:00Z"
 *       400:
 *         description: Erro de validação
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/transaction', authMiddleware, transactionController.createTransaction);

/**
 * @swagger
 * /transactions:
 *   get:
 *     summary: Lista todas as transações
 *     tags: [Transaction]
 *     security:
 *       - bearerAuth: []  
 *     responses:
 *       200:
 *         description: Lista de transações
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   value:
 *                     type: integer
 *                     example: 7990
 *                   lastFourDigits:
 *                     type: string
 *                     example: "1234"
 *                   cardHolderName:
 *                     type: string
 *                     example: "Luke Skywalker"
 *                   dateTime:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-08-24T12:00:00Z"
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/transactions', authMiddleware, transactionController.getTransactions);

module.exports = router;
