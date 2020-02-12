'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('employee_loan', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    'employee_refno': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'period_ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'voucher_no_loan': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'loan_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'loan_description': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'loan_amount': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'installments': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1',
      comment: "null"
    },
    'repayment_amount': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'loan_balance': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'entered_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_entered': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'updated_by': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'date_updated': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'loantype': {
      type: DataTypes.ENUM('Loan', 'Short'),
      allowNull: true,
      defaultValue: 'Loan',
      comment: "null"
    }
  }, {
    tableName: 'employee_loan'
  });
};