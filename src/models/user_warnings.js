/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_warnings', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'login': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'warning_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'warning_text': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'date_entered': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'status': {
      type: DataTypes.ENUM('Active','Disabled'),
      allowNull: true,
      defaultValue: 'Active',
      comment: "null"
    },
    'expected_logintime': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'str_query': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'user_warnings'
  });
};
