var express = require("express");
var csv = require("fast-csv");
var router = express.Router();
var fs = require("fs");
var mongoose = require("mongoose");
var attendance = mongoose.model('attendance');
var csvfile = __dirname + "/../public/files/attendance.csv";
var stream = fs.createReadStream(csvfile);

router.get("/", function (req, res, next) {
  res.render("index", { title: "Import CSV file using NodeJS" });
});
