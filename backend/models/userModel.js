//the schema for the user info
import express from "express";
import mongoose from "mongoose";
let app = express();
const Schema = mongoose.Schema;

//define schema below
export const userSchema = new Schema({
	_id: Schema.Types.ObjectId,
	fname: String,
	lname: String,
	phone: String,
	email: String,
	dispName: String,
	password: String,
	workout_plan: String,
});

var userModel = mongoose.model("contacts", contactSchema);

module.exports = formModel; 