'use strict';

module.exports = function(app) {
    
    // Home route
    var collector = require('../controllers/collector');
    app.post('/collect', collector.collect);

};
