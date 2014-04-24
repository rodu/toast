'use strict';

module.exports = function(app) {
    
    // Home route
    var testruns = require('../controllers/testruns');
    app.post('/api/testruns', testruns.post);
    app.get('/api/testruns', testruns.getAll);

};
