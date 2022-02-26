//the schema for the workout plans
import express from "express";
import mongoose from "mongoose";
let app = express(workoutSchema);
const Schema = mongoose.Schema;

//define schema below

export const workoutForm = new Schema({
    _id: Schema.Types.ObjectId,
    body_type: String,
    time: Number,
    goal: Number,
    user: String
})

var Model = mongoose.model("workout_plan_forms", workoutForm);

module.exports = workoutForm;