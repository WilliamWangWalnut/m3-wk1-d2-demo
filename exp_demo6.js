var express = require('express');
var app = express();

app.get('/home', (req, res) => {
    res.send('Home Page');
});
app.get('/about', (req, res) => {
    res.send('About');
});

// For invalid routes  显示报错信息, 除了上面两个route地址:/home和/about 其他全部报错
app.get('*', (req, res) =>{
    res.send('404! This is an invalid URL.');
});

app.listen(3000);


