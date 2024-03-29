import api from '../tools/common';
import db from '../config/sequelize';

function gettickets(req, res) {
    const sequelize = db.sequelize;
    var new_ref = req.query.new_ref;
    // console.log("getting tickets ====== >>>>> ===== <<<<");
    sequelize.query(`SELECT * from ticketing WHERE new_ref = '${new_ref}' order by new_ref desc limit 1000 `, {
            // type: sequelize.QueryTypes.SELECT
            type: sequelize.QueryTypes.SELECT
        })
        .then((data) => {
            api.ok(res, data);
            // res.json({      data: books, message: 'You got the details of All Books'
        }).catch((e) => {
            api.error(res, 'Error ' + e, 500);
        });
};

function getunavailableseats(req, res) {
    const sequelize = db.sequelize;
    var openbookref = req.query.openbookref;    
    sequelize.query(`SELECT * from notavailable_seats WHERE openbookref = '${openbookref}' order by seatno desc limit 1000 `, {
            // type: sequelize.QueryTypes.SELECT
            type: sequelize.QueryTypes.SELECT
        })
        .then((data) => {
            api.ok(res, data);
            // res.json({      data: books, message: 'You got the details of All Books'
        }).catch((e) => {
            api.error(res, 'Error ' + e, 500);
        });
}

module.exports = {
    gettickets,
    getunavailableseats
};