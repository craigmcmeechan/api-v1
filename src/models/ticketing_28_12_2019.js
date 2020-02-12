/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ticketing_28_12_2019', {
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
      comment: "null"
    },
    'reg_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'transdate': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    't_username': {
      type: DataTypes.STRING(100),
      allowNull: false,
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
      comment: "null"
    },
    't_station': {
      type: DataTypes.STRING(100),
      allowNull: false,
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
      type: DataTypes.STRING(100),
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
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: 'No',
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
    'ref': {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      comment: "null"
    },
    'sub_station': {
      type: DataTypes.STRING(100),
      allowNull: false,
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
    'cancel_date': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'voucherno': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'pick_point': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'children': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'childrennames': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'discount_type': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'crownid': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'amountug': {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.000',
      comment: "null"
    },
    't_currency': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'soldtdte': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'bus_type': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'bus_number': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'nationality': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'country': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'first_printout': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'first_printby': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'second_printout': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'second_printby': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'payment_mode': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'm_pesa_code': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'ticket_direction': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'exchange_rate': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'manual_bookno': {
      type: DataTypes.INTEGER(50),
      allowNull: true,
      comment: "null"
    },
    'manual_serial_no': {
      type: DataTypes.INTEGER(50),
      allowNull: true,
      comment: "null"
    },
    'entry_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_entered': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'isposted': {
      type: DataTypes.ENUM('N','Y'),
      allowNull: true,
      defaultValue: 'N',
      comment: "null"
    },
    'date_posted': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'voucher_after_redeeming': {
      type: DataTypes.INTEGER(50),
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'new_ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'backoffice_update': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'mpesa_authorised': {
      type: DataTypes.ENUM('YES','NO'),
      allowNull: true,
      comment: "null"
    },
    'mpesa_authorised_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'mpesa_authorised_date': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'system_access': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'voucherno2': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'welcome_sms_sent': {
      type: DataTypes.ENUM('Y','N'),
      allowNull: true,
      defaultValue: 'N',
      comment: "null"
    },
    'voucher_verification_code': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'scannedby': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'scanned': {
      type: DataTypes.ENUM('Y','N'),
      allowNull: true,
      defaultValue: 'N',
      comment: "null"
    },
    'scandate': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'imported': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'rebook': {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'No',
      comment: "null"
    },
    'mpesa_timestamp': {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "null"
    },
    'swapped_by': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'date_swapped': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'original_openbookingref': {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      comment: "null"
    },
    'apiuniqueid': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'original_seatno': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'reservationtype': {
      type: DataTypes.ENUM('TEMPORARY','UNTILPAID'),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'ticketing_28_12_2019'
  });
};
