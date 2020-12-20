const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fetch = require("node-fetch");

async function FetchData() {
  const url =" http://api.weatherstack.com/current?access_key=10be6c6f21c0f00ac5996f269291dee9&query=New%20York";
    //"http://api.weatherstack.com/current?access_key=10be6c6f21c0f00ac5996f269291dee9&query=Tunisia";
  const APIData = await fetch(url);
  const resjson = await APIData.json();
  const coordinates = {
    country: resjson.location.country,
    region: resjson.location.region,
    humidity: resjson.current.humidity,
    temperature: resjson.current.temperature,
    lat: resjson.location.lat,
    lon: resjson.location.lon,
    localtime: resjson.location.localtime,
    country:resjson.location.country,
    region:resjson.location.region

  };

  return coordinates;
  /*  const coordinates = {
    lat: resjson.location.lat,
    lon: resjson.location.lon,
    }; */
}

module.exports = FetchData;
