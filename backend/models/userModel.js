//the schema for the user info
import express from "express";
import mongoose from "mongoose";
const Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
//define schema below
export const User = new Schema({
	_id: Schema.Types.ObjectId,
	fname: {type: String, required: true},
	lname: {type: String, required: true},
	phone: {type: String, required: true, strict: false},
	email: {type: String, required: true},
	username: String,
	password: {type: String, required: true,strict: false},
	workout_plan: {type: String, default: ''}
});
User.plugin(passportLocalMongoose);
var UserModel = mongoose.model("users", User);

module.exports = UserModel; 