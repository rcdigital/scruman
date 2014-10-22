'use strict';
var mongoose = require('mongoose');
var userSchema = require('user').Schema;
var projectSchema = require('project').Schema;


var CompanyPricesSchema = new mongoose.Schema({
  description: String,
  price:{type: Number},
  createdAt: {type: Date, default: Date.now},
  updatedAt:{type: Date, default: Date.now}
});

var CompanySchema = new mongoose.Schema({
  name: {type: String, required: true},
  slug: String,
  picture: String,
  companyPrices: [CompanyPricesSchema],
  team: [userSchema],
  projects: [projectSchema]
});

var Company = mongoose.model('Company', CompanySchema);

module.exports = {
  Company: Company,
  Schema: CompanySchema
};
