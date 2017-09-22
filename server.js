const express = require('express');
const multer = require('multer');
var app = express();
//store files as buffer objects
var storage = multer.memoryStorage();
var upload = multer({storage: storage});
app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/upload', upload.single('data'), function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({size: req.file.size}));
});

app.listen(process.env.PORT,);