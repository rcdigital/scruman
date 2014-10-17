'use strict';
var mongoose = require('mongoose');
var userSchema = require('user').Schema;
var projectSchema = require('project').Schema;

var CompanySchema = new mongoose.Schema({
  name: { type: String, required: true},
  slug: String,
  picture: String,
  team: [userSchema],
  projects: [projectSchema]
});

var Company = mongoose.model('Company', CompanySchema);

module.exports = {
  Company: Company,
  Schema: CompanySchema
};
