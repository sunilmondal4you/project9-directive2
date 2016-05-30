
var express= require("express");
var bodyParser = require('body-parser');

var app= express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/a',function(req,res) {
    res.send("Hello World! can u here me?");
});

app.listen(3000,function () {
    console.log("Server 3000 is started");
});