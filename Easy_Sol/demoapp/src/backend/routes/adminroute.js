const express = require("express");
const adminrouter = new express();
const controller = require("../controllers/admincontroller");

adminrouter.post("/login", controller.adminlogindata);
adminrouter.get("/", controller.getadmindata);
adminrouter.post("/update", controller.updatedata);
adminrouter.get("/updates", controller.geting);

module.exports = adminrouter;
