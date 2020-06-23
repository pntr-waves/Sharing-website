var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    userID: String,
    userName:String,
    productID: String,
    text:String,
});


module.exports = mongoose.model("comment",commentSchema);