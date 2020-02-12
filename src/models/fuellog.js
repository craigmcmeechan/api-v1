/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fuellog', {
    'fdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'orderno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_driver': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'station': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'lastkm': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'currentkm': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'fueledvolume': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'cost': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'refno': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'invoiceno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reg_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    't_conductor': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_entered': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'fromtown': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'totown': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'ispaid': {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'transaction_type': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'not_payment',
      comment: "null"
    },
    'cheque_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'status': {
      type: DataTypes.ENUM('active','deleted'),
      allowNull: true,
      defaultValue: 'active',
      comment: "null"
    },
    't_driver2': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'comment': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'enteredby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'dateentered': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'editedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'dateedited': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    }
  }, {
    tableName: 'fuellog'
  });
};
