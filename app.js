var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("langding");
});

app.get("/campgrounds", function(req, res){
    
});

app.listen(4396, process.env.IP, function(){
    console.log("Yelp app is started");
});