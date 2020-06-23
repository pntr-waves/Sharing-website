var express = require("express");
var app = express();


var port = process.env.PORT || 3000;
var mongoose = require("mongoose");
var flash = require("connect-flash");
var passport = require("passport");

var morgan = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var session = require("express-session");
var MongoStore =  require("connect-mongo")(session);
var configDB = require("./config/database");

mongoose.connect(configDB.url,{ useNewUrlParser: true,useUnifiedTopology: true });

require('./config/passport')(passport);


app.use(morgan("dev"));
app.use("/share", express.static("share"))
app.use(cookieParser());
//app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:true}))



app.set("view engine", "ejs");

app.use(session({
    secret:"ilovecodetheworld",
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    cookie: {maxAge: 180 * 60 * 1000}
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
//Global var
app.use(function(req,res,next){
    res.locals.loginn = req.isAuthenticated();
    res.locals.session = req.session;
    next();
})

require("./app/routes/routes")(app,passport);
//Global vars
app.use(function(req,res,next){
    res.locals.success_msg= req.flash("success_msg");
    res.locals.error_msg= req.flash("error_msg");
    res.locals.error= req.flash("error");
    next();
})


app.listen(port);
console.log("Listenning: "+port);