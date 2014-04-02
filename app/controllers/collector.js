'use strict';

exports.render = function(req, res) {
    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : 'null'
    });
};

exports.collect = function(req, res){
    console.log(req.body);
    
    res.render();
};