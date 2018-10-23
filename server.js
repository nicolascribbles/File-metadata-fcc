'use strict';
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors');
var app = express();

//Set Home
app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

//USE
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

//POST
app.post('/upload', upload.single('upfile'), function(req,res,next){
  return res.json(req.file);
});

//GET
app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});


//CHECK SERVER
app.listen(process.env.PORT || 3000, function () {
  console.log('hiiiiidey-ho!');
});
