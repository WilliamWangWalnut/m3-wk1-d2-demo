var express = require('express');
var app = express();

/*
    严格控制route地址
*/

app.get('/index', (req, res) => {   
    res.send('Home Page');
});
app.get('/about', (req, res) => {
    res.send('About');
});

app.listen(3000);


