/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('open_ticket', {
    't_route': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'bookdate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'booktime': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reporttime': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'clientname': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    't_idno': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'seatno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00000',
      comment: "null"
    },
    'reg_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'transdate': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'openbookref': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'ticketno': {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    't_station': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'mobileno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'fromtown': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'totown': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'routecode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'ticketcount': {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'ticketstatus': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Active',
      comment: "null"
    },
    'redeemed': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'cancelled_by': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'cancel_reason': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'tref': {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'description': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'voucher_type': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'amountug': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'first_printout': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'first_printby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'second_printout': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'second_printby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'expiry_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'percentage_charge': {
      type: DataTypes.ENUM('YES','NO'),
      allowNull: true,
      defaultValue: 'NO',
      comment: "null"
    },
    'percentage_charge_rate': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'redeemed_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'redeemed_date': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'tickets_to_redeem': {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "null"
    },
    'assigned_user': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'voucher_verification_code': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'datecreated': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'additionalvoucher_amount': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'open_ticket'
  });
};
