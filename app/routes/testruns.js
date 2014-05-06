'use strict';

module.exports = function(app) {
    
    // Home route
    var testruns = require('../controllers/testruns');
    app.post('/testruns', testruns.post);
    app.get('/testruns', testruns.getAll);

};
