var mongoose = require("mongoose");

var chatSchema = mongoose.Schema({
    room:String,
    user:String,
    userName:String,
    partner:String,
    partnerName:String,
    time:{type:Date, default:Date.now}
});


module.exports = mongoose.model("chat",chatSchema);