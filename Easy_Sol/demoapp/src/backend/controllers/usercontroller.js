//Requring the models that we may need to perform the CRUD operations in the file
const User = require("./../models/usermodel");
const Userdata = require("../models/problemmodel");

//JWT is another npm package which is used to basically generate a token such that this token can help the user
//to access the differnt components of the website
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const bcrypt = require("bcryptjs");

//This function is used to generate the token based on the email of the user and a secret code that we have saved in the environment variables
const sendusertoken = function (body) {
  const token = jwt.sign({ id: body.email }, process.env.JWT_TOKEN_SECRET);
  return token;
};

let body;
let token = false;
let invalid = false;

//Checking the user registration
exports.getuserdata = (req, res, next) => {
  body = req.body;
  User.findOne({ email: body.email }, (err, data) => {
    if (err) {
      console.log(err);
    } else if (data) {
      console.log("The email id is already registered .....please login");
      invalid = true;
      token = false;
    } else {
      User.create(body);
      token = sendusertoken(body);
      invalid = false;
    }
  });

  next();
};

exports.receivecomplaintform = (req, res, next) => {
  Userdata.create(req.body);
  next();
};

exports.mapdata = (req, res, next) => {
  let body = Userdata.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.json(result);
    }
  });
  console.log(body);
};

exports.senduserdata = (req, res, next) => {
  res.json({
    status: "OK",
    body,
    token,
    invalid,
  });

  // res.render("index", { text: "Hello world" });

  next();
};

let loginbody;
let logintoken;

let invalidlogin = false;
exports.logindata = (req, res, next) => {
  loginbody = req.body;

  User.findOne({ email: loginbody.email }, function (err, data) {
    if (err) {
      console.log(err);
    } else if (data === null) {
      console.log("Invalid");
      invalidlogin = true;
    } else {
      console.log("Data you entered is found");
      bcrypt.compare(loginbody.password, data.password, (err, res) => {
        if (err) {
          console.log(err);
        } else if (res) {
          console.log("The password entered is valid");
          invalidlogin = false;
          token = sendusertoken(loginbody);
        } else {
          invalidlogin = true;
          console.log("Invalid Id or password");
        }
      });
    }
  });
  next();
};

exports.senduserlogindata = function (req, res, next) {
  res.json({
    status: "Ok",
    loginbody,
    token,
    invalidlogin,
  });

  next();
};

exports.auth = function (req, res, next) {
  fetch("http://localhost:5000/api/user/login", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (!data.token) {
        console.log("Access denied");
      } else {
        next();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

let upvote = 0;

exports.getupvotes = (req, res, next) => {
  upvote = Userdata.findOne({ _id: req.params.id });
  // console.log(upvote);
};

exports.upvotes = (req, res, next) => {
  res.json({
    upvote,
  });
};

exports.gettoken = (req, res, next) => {
  res.json({
    status: "Ok",
    token,
  });
};
