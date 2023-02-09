var express = require("express");
var app = express();
var connection = require('./database');
const bodyParser = require('body-parser');
const cors = require("cors");
app.use(cors());


// parse application/json
app.use(bodyParser.json());
app.get('/', function(req, res) {
    let sql = "SELECT * FROM event";
    connection.query(sql, function(err, results){
        if (err) throw err;
        res.send(results);
    });
});
const router = express.Router();
app.listen(3000, function(){
    console.log('App Listening on port 3000');
    connection.connect(function(err){
        if(err) throw err;
        console.log('Database connected!');
    })
});


app.post('/store-data',(req, res) => {
    console.log(req.body.title+ '       as');
    let data = {
        eventtitle: req.body.title,
        EventDate: req.body.EventDate,
        createdate: req.body.created,
        createdby: req.body.createdby,
    
    
    };
    let sql = "INSERT INTO event SET ?";
    let query = connection.query(sql, data,(err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });





  
app.put('/update',(req, res) => {
   

    console.log(req.body.idevent+ '       idevent');
    console.log(req.body.title+ '       title');
    console.log(req.body.EventDate+ '       EventDate');
    console.log(req.body.createdby+ '       createdby');
    console.log(req.body.created+ '       created');
    const idevent  = req.body.idevent;
const eventtitle = req.body.title;
const EventDate  = req.body.EventDate;
const createdby  = req.body.createdby;
const createdate = req.body.created;






    let sql = "UPDATE  event SET eventtitle = ? ,eventdate = ? ,createdby = ? , createdate = ? WHERE idevent = ?";
    let query = connection.query(sql, [eventtitle,EventDate,createdby,createdate,idevent ], (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });









 
  app.put('/updating',(req, res) => {

    let data = {
        eventtitle: req.body.title,
        EventDate: req.body.EventDate,
        createdate: req.body.created,
        createdby: req.body.createdby,

    
    };

const id = req.body.idevent;

const eventtitle = req.body.title;





    let sql = "UPDATE event SET  eventtitle = ? WHERE idevent = 1";
    let query = connection.query(sql, [eventtitle,id], (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });
























  app.delete('/delete',(req, res) => {
   
    let data = {
        id: req.body.idevent,
    };
    let sql = "DELETE FROM event WHERE idevent = ?";
    let query = connection.query(sql, data,(err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });



