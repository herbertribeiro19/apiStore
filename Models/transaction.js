const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database');

const Transaction = sequelize.define('Transaction', {
  value: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  dateTime: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  lastFourDigits: {
    type: DataTypes.STRING(4),
    allowNull: false
  },
  cardHolderName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id'
    }
  }
});

module.exports = Transaction;
