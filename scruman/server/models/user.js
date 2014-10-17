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
  createdAt: {type: Date, default: Date.now},
  updateAt: {type: Date, default: Date.now}
});

UserSchema.plugin(require('mongoose-role'), {
  roles: ['public', 'user', 'admin'],
  accessLevels: {
    'public': ['public', 'user', 'admin'],
    'user': ['user', 'admin'],
    'admin': ['admin']
  }
});

var User = mongoose.model('User', UserSchema);

module.exports = {
  User: User,
  Schema: UserSchema
};
