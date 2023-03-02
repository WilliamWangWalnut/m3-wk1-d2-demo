var express = require('express');
var app = express();

///First middleware before response is sent
app.use(function(req, res, next){     //见到next  就是middleware
    console.log("Start");
    next();
 });
 
 //Route handler
 app.get('/', function(req, res, next){   //app.get 针对route地址
    res.send("Middle");
    next();
 });
 
 app.use('/', function(req, res){   //app.use  就只是执行  不管route地址
    console.log('End');
 });

app.listen(3000);


