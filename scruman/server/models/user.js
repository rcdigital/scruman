'use strict';
var mongoose = require('mongoose');
var roleSchema = require('role').Schema;


var UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true},
  username: String,
  picture: String,
  socialId: String,
  baseAmount: Number,
  role: roleSchema,
  createdAt: {type: Date, default: Date.now},
  updateAt: {type: Date, default: Date.now}
});

var User = mongoose.model('User', UserSchema);

module.exports = {
  User: User,
  Schema: UserSchema
};
