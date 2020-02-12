'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var _ref;

  return sequelize.define('employee_nhif', {
    'ref': (_ref = {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }, _defineProperty(_ref, 'primaryKey', true), _defineProperty(_ref, 'comment', "null"), _defineProperty(_ref, 'autoIncrement', true), _ref),
    'lower_bound': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'upper_bound': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'amount': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'date_created': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'created_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'updated_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_updated': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'employee_nhif'
  });
};