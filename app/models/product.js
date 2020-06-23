var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

var productSchema = mongoose.Schema({

    name: String,
    decri: String,
    price: Number,
    userId: String,
    tag: String,
    urlImage: String,
    view: {type:Number, default:0},
    date: { type: Date, default: Date.now },
});


module.exports = mongoose.model("product", productSchema);