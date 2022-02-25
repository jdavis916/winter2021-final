 //the schema for the workout plans
import express from "express";
import mongoose from "mongoose";
let app = express(workoutSchema);
const Schema = mongoose.Schema;

//define schema below

export const workoutSchema = new Schema({
	title: {
		type: String,
		required:true,
		unique:true,
	}

})

var Model = mongoose.model("workout_plans", workoutSchema);

module.exports = workoutSchema;