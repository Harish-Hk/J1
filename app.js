/**
 * Created by Harish Kumar on 08-05-2017.
 */


var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/hkdb')
var stud = require('./mongoose/stud.js');

// Create application/x-www-form-urlencoded parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.get('/index', function (req, res) {
    res.sendFile( __dirname + "/" + "reg1.html");
});
app.post('/process_post', function (req, res) {
    console.log("hello");
    var s = req.body;
   // res.json(s);

    //performing operations using reference variable stud

    // calls function isn stud.js
    stud.addStudent(s,function (err, stud) {
        if (stud)
        {

            response= {  "result": "data inserted successfully" }

            res.json(response);
        }
        else
        {
          error={ "error": "sorry insertion failed" }

          res.json(error);
        }

    });

});
//retrieving
app.get('/api/retrieveByField',function (req, res) {
    var name = "harish";
    stud.getStudentByField(name, function (err, studentData) {
        if (err) {
            console.log(err);

        }
        res.json(studentData);

    });
});
//removving
    app.get('/api/removeByField', function (req, res) {

        var name = "harish"

        stud.remStudentByField(name, function (err, studentData) {
            if (err) {
                console.log(err);

            }
            res.json(studentData);
        })

    });
//updating
    /*app.get('/api/updateByField', function(req,res){

     var name= "haroish"


     stud.updateStudentByField(name,function (err, studentData) {
     if(err){
     console.log(err);

     }  res.json(studentData);
     })

     })*/

    app.get('/update', function (req, res) {
        var conditions = {"name": "sdasdsdf"};
        var update = {"name": "vidya"};
        var options = {multi: true};
        stud.update(conditions, update, options, function (err, numAffected) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(numAffected);
            }
        })
    })


    var server = app.listen(8081, function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log("Example app listening at http://%s:%s", host, port);
    });





/**
 * Created by Harish Kumar on 08-05-2017.
 */
