'use strict';

var mongoose = require('mongoose'),
    TestRun = mongoose.model('TestRun');

exports.render = function(req, res) {
    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : 'null'
    });
};

exports.collect = function(){
    //console.log(req.body);
    var testRun = new TestRun({
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
    });
    testRun.save(function(err){
        if (err){
            console.log(err);
        }
    });
};
