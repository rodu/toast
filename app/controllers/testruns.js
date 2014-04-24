'use strict';

var mongoose = require('mongoose'),
    TestRun = mongoose.model('TestRun');

exports.render = function(req, res) {
    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : 'null'
    });
};

exports.post = function(req, res){
    //console.log(req.body);
    /*var testRun = new TestRun({
        children: [{
            name: "Mock suite",
            children: [{
                name: "Mock module",
                children: [{
                    name: "Mock test",
                    children: [{
                        name: "Mock assertion"
                    }]
                }]
            }]
        }]
    });*/
    console.log(req.body);
    (new TestRun(req.body)).save(function(err){
        if (err){
            res.send(err);
        }
        res.json({messge:'OK'});
    });
};

exports.getAll = function(req, res){
    TestRun.find(function(err, testruns){
        if (err){
            res.send(err);
        }
        res.json(testruns);
    });
};
