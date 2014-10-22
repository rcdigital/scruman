'use strict';

var mongoose = require('mongoose');

var backlogSchema = require('backlog').schema;
var userSchema = require('user').schema;

var ProjectSchema = new mongoose.Schema({
  name: String,
  slug: String,
  description: String,
  soldAmount: Number,
  backlogs: [backlogSchema],
  team: [userSchema],
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
});


var Project = mongoose.model('Project', ProjectSchema);

module.exports = {
  Project: Project,
  Schema: ProjectSchema
};
