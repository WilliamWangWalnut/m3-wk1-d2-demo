var express = require('express');
var app = express();

app.get('/bookings/:bookingId', function(req, res) {
    res.send(req.params);    //req.params显示bookingID
});

app.listen(3000);
