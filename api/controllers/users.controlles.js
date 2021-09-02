const createError = require('http-errors');
const user = require('../models/user.model');
const passport = require('passport');
const User = require('../models/user.model');



module.exports.create = (req,res,next) => {
    const data = { name,email, avatar,password, phone} = req.body

    User.create(req.body)
      .then(user => res.status(201).json(user))
      .catch(next)
}
