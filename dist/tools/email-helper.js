'use strict';

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing

function helpMail() {
    _nodemailer2.default.createTestAccount(function (err, account) {

        // create reusable transporter object using the default SMTP transport
        var transporter = _nodemailer2.default.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'fmdrniykevqk7yhh@ethereal.email', // generated ethereal user
                pass: 'RNSGRTtejbZvKUrhu3' // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        var mailOptions = {
            from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
            to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
            subject: 'Hello ✔', // Subject line
            text: 'Hello world?', // plain text body
            html: '<b>Hello world?</b>' // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', _nodemailer2.default.getTestMessageUrl(info));

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });
}

module.exports = {
    helpMail: helpMail

};