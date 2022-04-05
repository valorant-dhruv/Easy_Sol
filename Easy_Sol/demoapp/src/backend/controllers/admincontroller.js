const Data = require("../models/admin");
const userdata = require("../models/problemmodel");
let invalid = true;
exports.adminlogindata = (req, res, next) => {
  let body = req.body;
  Data.findOne({ email: body.email }, (err, data) => {
    if (err) {
      console.log(err);
    } else if (data == null) {
      console.log("Invalid data entered");
      invalid = true;
    } else {
      if (data.password == body.password) {
        console.log("Admin login is valid allow him to redirect");
        invalid = false;
      } else {
        console.log("Invalid password");
        invalid = true;
      }
    }
  });
  next();
};

exports.getadmindata = (req, res, next) => {
  res.json({
    invalid,
  });

  next();
};

let complaintbody = false;
let result;
let body;
exports.updatedata = (req, res, next) => {
  complaintbody = req.body;
  body = complaintbody;
  body.data.status = "Under Review";

  userdata.findOneAndReplace({ names: complaintbody.data.names }, body.data);
};

exports.geting = (req, res, next) => {
  res.json({
    complaintbody,
  });
};
