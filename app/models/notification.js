var mongoose = require("mongoose");

var chatSchema = mongoose.Schema({
    userID: String,
    userName:String,
    productID:String,
    productName:String,
    clientID:String,
    clientName:String,
    text:String,
    message:String,
    time:{type:Date, default:Date.now}
});


module.exports = mongoose.model("notification",chatSchema);