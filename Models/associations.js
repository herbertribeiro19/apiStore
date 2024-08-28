const User = require('./user');
const Transaction = require('./transaction');

User.hasMany(Transaction, { foreignKey: 'userId' });
Transaction.belongsTo(User, { foreignKey: 'userId' });

module.exports = { User, Transaction };
