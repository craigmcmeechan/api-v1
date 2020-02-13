import jwt from 'jsonwebtoken';
import models from '../config/sequelize';
import api from '../tools/common';
import config from '../config/settings';

function list(req, res) {
  // models.users.findAll( {attributes: {
  models.grouped_cities.findAll( 
    {
      attributes: {
        exclude: ['Password']
      }
      
    })
    .then((data) => {
      console.log(data)
      api.ok(res, data);
    });
}
function fromtotown(req, res) {
  // models.users.findAll( {attributes: {
  models.grouped_cities.findAll( 
  {        
    attributes: {
      exclude: ['Password']
    }      
  })
  .then((data) => {
    console.log(data)
    api.ok(res, data);
  });
}
function fromtotowndate(req, res) {
  // models.users.findAll( {attributes: {
  models.grouped_cities.findAll( 
  {
    where : {
      bookdate : req.body.bookdate        
    },    
    attributes: {
      exclude: ['Password']
    }      
  })
  .then((data) => {
    console.log(data)
    api.ok(res, data);
  });
}

/*
function login(req, res, next){
  models.uccaduser.find({
    where : {
      Login : req.body.username,
      Password : req.body.password
    }
  }).then((userL) =>{
    var data = userL.dataValues;
    var theToken = jwt.sign({ IdUser : data.IdUser, username : data.Login}, config.security.salt, {expiresIn: 24 * 60 * 60});
    api.ok(res, {'token' : theToken});
  }).catch((e)=>{
    api.error(res, 'Wrong credentials', 500);
  });

  }
  
  function register(req, res, next) {
    models.user.build({
      nickname : req.body.nickname,
      name : req.body.name,
      lastname : req.body.lastname,
      phone : req.body.phone,
      email : req.body.email,
      password : req.body.password,
      role_id : req.body.role_id

    }).save().then(() =>{
      api.ok(res, null);
    }).catch(e =>{
      api.error(res, "Could not process your request", 500);
    });
  }
  function profile(req, res, next) {
    models.user.findById(
      req.params.id,
      {attributes: {
        exclude: ['password']
      }})
          .then((userL) =>{
            //var data = userL.dataValues;
            api.ok(userL)
          }).catch((e)=>{
            api.error(res, e, 500);
          });
  }
  */
module.exports = {
  list,
  fromtotown,
  fromtotowndate
  /*,
  login,
  register,
  profile
  */

};