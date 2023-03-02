var express = require('express');
var app = express();

app.get('/hello', function(req,res){  //必须要求localhost:3000/hello这个route  才会出现function
    res.send("Hello world!");
});

app.listen(3000);


