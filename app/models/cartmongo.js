var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
    userID: String,
    productID: String,
    productName:String,
    userofproductID: String,
    ImageProduct:String,
    qty: Number,
    price: Number,
    status:{type: String, default:"Chưa gửi yêu cầu"}
});


module.exports = mongoose.model("cart",productSchema);