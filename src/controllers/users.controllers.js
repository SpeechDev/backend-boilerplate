const db = require("../models");
const User = db.users;
//const Op = db.Sequelize.Op;


exports.getUsers = async (req, res) => {
  User.findAll().then((response) => {
    res.status(200).send(response)
  }).catch( (e) => {
    console.log(e)
  })
}