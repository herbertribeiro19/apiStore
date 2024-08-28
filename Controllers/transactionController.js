const Transaction = require('../Models/transaction');

exports.createTransaction = async (req, res) => {
  const { card_number, value, card_holder_name } = req.body;
  const userId = req.userId; 

  try {
    const transaction = await Transaction.create({
      value,
      lastFourDigits: card_number.slice(-4),
      cardHolderName: card_holder_name,
      userId 
    });

    res.status(201).json({ message: 'Transação registrada com sucesso', transaction });
  } catch (error) {
    res.status(400).json({ error: 'Erro ao registrar a transação' });
  }
};

exports.getTransactions = async (req, res) => {
  const userId = req.userId; 

  try {
    const transactions = await Transaction.findAll({ where: { userId } });
    
    if (transactions.length === 0) {
      return res.status(404).json({ message: 'Nenhuma transação encontrada' });
    }
    
    res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Erro ao buscar transações' });
  }
};
