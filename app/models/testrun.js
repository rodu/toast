'use strict';
var mongoose = require('mongoose'),
    testRunSchema = require('./schemas/testrun');

mongoose.model('TestRun', testRunSchema);
