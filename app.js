/*jslint sloppy: true */
var express = require('express'),
    app = express();

app.use(express.bodyParser());

var notes = [];

app.post('/note', function (req, res) {
    console.log(req.body);
    var MyNote = require('./model/boot').note,
        note = new MyNote({
            title: req.body.title,
            category: req.body.category,
            content: req.body.content
        });
    console.log(note.get('title'));
    notes.push(note);
    res.send('ok');
});

app.listen('3000');



