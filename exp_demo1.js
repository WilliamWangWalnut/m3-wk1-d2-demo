var express = require('express');  //先载入express module, 但是注意要先install
var app = express();

app.get('/', function(req, res) {   //如果找到'/', 就进行function
    res.send("Hello world!");
});

app.listen(3000);