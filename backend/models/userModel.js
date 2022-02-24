//the schema for the user info
import express from "express";
import mongoose from "mongoose";
let app = express();
const Schema = mongoose.Schema;

//define schema below
/*export const userSchema = new Schema({
	_id: 
	fname:
	lname:
	phone:
	email:
	dispName:
	password:
	workout_plan:
})*/

var formModel = mongoose.model("contacts", contactSchema);

module.exports = formModel;