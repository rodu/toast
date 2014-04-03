'use strict';

module.exports = function(app) {
    
    // Home route
    var testruns = require('../controllers/testruns');
    app.post('/testruns/collect', testruns.collect);

};
