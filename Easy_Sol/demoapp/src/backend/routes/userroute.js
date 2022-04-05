const express = require("express");
const userrouter = new express();
const path = require("path");
const usercontroller = require("./../controllers/usercontroller");
const ejs = require("ejs");

userrouter.use(express.static(path.join(__dirname, "public")));
userrouter.set("views", "../views");
userrouter.set("view engine", "ejs");

userrouter.get("/home", (req, res) => {
  res.send("Welcome to the user router");
});
userrouter.post("/signup", usercontroller.getuserdata);
userrouter.get("/signuped", usercontroller.senduserdata);
userrouter.post("/login", usercontroller.logindata);
userrouter.get("/login", usercontroller.senduserlogindata);
userrouter.post("/complaintform", usercontroller.receivecomplaintform);
userrouter.get("/map", usercontroller.mapdata);
userrouter.get("/upvotes", usercontroller.upvotes);
userrouter.put(`/upvotes/:id`, usercontroller.getupvotes);

userrouter.get("/token", usercontroller.gettoken);

module.exports = userrouter;
