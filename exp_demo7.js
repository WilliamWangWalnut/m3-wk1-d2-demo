var express = require('express');
var app = express();
/*
    middleware功能
    类似中途拦截, 然后加入信息
*/    
// Simple request time logger
app.use(function(req, res, next){    //next指出 一旦middleware完成后  下一步去哪里
    console.log("A new request received at " + Date.now());

    // This function call tells that more processing is
    // required for the current request and is in the next middleware
    //function/route handler.
    next();
});
 

    

app.get('/home', (req, res) => {
    res.send('Home Page');
});
app.get('/about', (req, res) => {
    res.send('About');
});

app.listen(3000);


