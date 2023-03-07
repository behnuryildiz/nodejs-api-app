const { response } = require('express');
var express = require('express');
var app = express();
const con = require('./config')
const jsonfile = require('jsonfile');


var fs = require('fs')

//app.use(express.json());   // though, data would be come as json data from the body

var url = require ('url')


app.use(express.urlencoded({ extended: true }));


// GET ROUTES

app.get('/all', (req, res) => {
   con.query("select first_name,owner_id, pet_id, pet_name, species from Owners, Pets", (err, result) => {
      if (err) {
         res.send('error in api')
      }
      else { res.send(result); }
   });
});


app.get('/owners', (req, res) => {
   con.query("select * from Owners", (err, result) => {
      if (err) {
         res.send('error in api')
      }
      else { res.send(result); }
   });
});


app.get('/pets', (req, res) => {
   con.query("select * from Pets", (err, result) => {
      if (err) {
         res.send('error in api')
      }
      else { res.send(result); }
   });
});


app.get('/pets/species', (req, res) => {
   con.query("select species from Pets", (err, result) => {
      if (err) {
         res.send('error in api')
      }
      else { res.send(result); }
   });
});




// POST ROUTES


app.post('/owners/add', (req, res) => {
   const data = req.body;
   con.query('INSERT INTO Owners SET ?', data, (error, results) => {
      res.send(results);

   })
}) 


app.post('/pets/add', (req, res) => {
   const data = req.body;
   con.query('INSERT INTO Pets SET ?', data, (error, results) => {
      res.send(results);

   })
}) 



// SERVER CONFGS


var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("app listening at http://%s:%s", host, port)
})
