var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var attendanceSchema = new Schema({
  FirstName: { type: String, Required: "Name cannot be left blank." },
  PantherID: { type: Number },
  LastName: { type: String, Required: "Product price cannot be left blank." },
  Department: { type: String },
  Level: { type: String },
  Campus: { type: String },
  Degree: { type: String },
  Email: { type: String },
  College: { type: String },
  Year: { type: Number },
  CheckIn: { type: String }
});
module.exports = mongoose.model('attendance', attendanceSchema);
