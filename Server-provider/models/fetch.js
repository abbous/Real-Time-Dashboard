const express = require("express");
const mongoose = require("mongoose");
const Fetchapi = require("./Fetchapi");
const app = express();
const StoreSchema = mongoose.Schema;
const geoSchema = new StoreSchema({
  type: {
    type: String,
    enum: ["Point"],
  },
  coordinates: {
    type: [Number],
    index: "2dsphere",
  },
});

const altSchema = new StoreSchema({
  
  temperature:{
    type: Number,
  },
  humidity:{
    type: Number
  },
  localtime: {
    type: Date
  },
  country:{
    type:String
  },
  region:{
    type:String
  },
  geometry: geoSchema,
  updated_At: {
    type: Date,
    default: Date.now,
  },
});

/* 
StoreSchema.pre("save", async function (next) {
  const data = await Fetchapi();
  console.log(data);
  this.location = {
    type: "Point",
    coordinates: [data[0].lat, data[0].lon],
  };
  next();
}); */

const geoStore = mongoose.model("Store", altSchema);
module.exports = geoStore;
