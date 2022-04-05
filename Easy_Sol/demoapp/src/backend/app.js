const express = require("express");

//here we have geenrated on object of the app
//The app.js file basically handles the admin as well as user routes
let app = express();

//Body parser is a middleware function which helps in accessing form data
//Whenever you are fetching the form data use bodyparser
const bodyParser = require("body-parser");

//This is the admin  route as we are using restful api hence it becomes easy to differntiate routes and controllers
const adminrouter = require("./routes/adminroute");

//This is the user route as we are using restful api hence it becomes easy to differntiate routes and controllers
const userrouter = require("./routes/userroute");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Whenever you are fetching the data between different servers use cors to prevent any error
//It means the cross origin resource sharing is now allowed
app.use(cors());

//These are the two routes we are going to use and they must be used in the specified url in the localhost
app.use("/api/admin", adminrouter);
app.use("/api/user", userrouter);

//We are exporting the app object
module.exports = app;
