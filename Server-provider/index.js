const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fetch = require("node-fetch");
const connectDB = require("./config/db");
const geoStore = require("./models/fetch");
const FetchData = require("./models/Fetchapi");
const dotenv = require("dotenv");
//require("dotenv").config();
dotenv.config({ path: "./config/.env" });
const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());
connectDB();

var resjson;
 (async function add() {
  resjson = await FetchData();
  console.log(resjson);
})()


app.post("/geo", function (req, res, next) {
  const newStore = new geoStore({
    temperature: resjson.temperature,
    humidity: resjson.humidity,
    localtime: resjson.localtime,
    country:resjson.country,
    region:resjson.region,
    geometry: {
      type: "Point",
      coordinates: [resjson.lat, resjson.lon],
    },
  });
  console.log('store',newStore)

  // storing geojson into DB
  newStore.save(function () {
    try {
      return res.status(201).json({
        success: true,
        data: newStore,
      });
    } catch (err) {
      console.error(err);
      if (err.code === 11000) {
        return res.status(400);
      }
      res.status(500).json({ error: "Server error" });
    }
  });

  //update db document
  // geoStore
  //   .updateOne({
  //     $set: {
  //       temperature: resjson.temperature,
  //       humidity: resjson.humidity,
  //       localtime: resjson.localtime,
  //       country:resjson.country,
  //       region:resjson.region,
  //       geometry: {
  //         type: "Point",
  //         coordinates: [resjson.lat, resjson.lon],
  //       },
  //     },
  //   })
  //   .exec();
});

app.get("/serverData", async (req, res) => {
  const retrieveModel = await geoStore.find();
  console.log('retrieve Data:',retrieveModel);

  try {
    return res.status(201).json({
      success: true,
      data: retrieveModel,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({ error: "Server error" });
  }
});

app.listen(port, () => {
  console.log(`app running on prot ${port}`);
});
