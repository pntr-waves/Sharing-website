var mongoose = require("mongoose");
var moment = require("moment");

var messdataSchema = mongoose.Schema({
    room:String,
    sender:String,
    data:String,
    time:{type:String, default:()=>moment().format("hh:mm a, DD/MM/YYYY")}
});


module.exports = mongoose.model("messdata",messdataSchema);