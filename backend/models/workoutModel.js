//the schema for the workout plans
import express from "express";
import mongoose from "mongoose";
let app = express();
const Schema = mongoose.Schema;

//define schema below

export const workoutSchema = new Schema({

})

var Model = mongoose.model("workout_plans", workoutSchema);

module.exports = workoutSchema;