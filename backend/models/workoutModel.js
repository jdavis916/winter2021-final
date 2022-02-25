 //the schema for the workout plans
import express from "express";
import mongoose from "mongoose";
let app = express(workoutSchema);
const Schema = mongoose.Schema;

//define schema below

export const workoutSchema = new Schema({
	_id: Schema.Types.ObjectId,
    body_types: [{type: String}],
    time: Number,
    weight_loss: Number
});

var Model = mongoose.model("workout_plans", workoutSchema);

module.exports = workoutSchema;