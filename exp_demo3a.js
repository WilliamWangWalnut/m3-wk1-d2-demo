/*  不直接访问   先建立router程序  在通过router程序在3b访问
    app.get   vs   app.post

    app.get('/hello', function(req, res){
        res.send("Hello World!");
    });

    app.post('/hello', function(req, res){
        res.send("You just called the post method at '/hello'!\n");
    });
*/

var express = require('express');
var router = express.Router();   //Router()本身是express module中的一个组件

router.get('/home', function(req, res){
    res.send("Hello World!");
});
router.post('/home', function(req, res){
    res.send("You just call the post method at '/hello'!\n");
});

//export this router to use in exp-demo3b.js
module.exports = router;