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
        suites: {
            name: "Test test suite",
            children: [{
                name: "Test module"
            }]
        }
    });
    testRun.save(function(err){
        if (err){
            console.log(err);
        }
    });
};
