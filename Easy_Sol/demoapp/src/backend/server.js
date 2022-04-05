//Express is a node js framework which makes work quite easy for backend developers
const express = require("express");
const app = require("./app.js");

//Dotenv is an npm package that is used for getting the environment variables which are stored in the config.env file
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

//Mongoose helps in connecting the express app with our mongodb atlas server
const mongoose = require("mongoose");

const DB = process.env.DATABASE_DB.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

//This is the function that is used to connect the database with our express application
mongoose
  .connect(DB)
  .then(() => {
    console.log("The connection successful with the database");
  })
  .catch((err) => {
    console.log(err);
  });

//On which port our app is running is mentioned here
app.listen(process.env.SERVER_PORT, () => {
  console.log("The server is now working ");
});
