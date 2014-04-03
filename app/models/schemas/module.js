'use strict';
var mongoose = require('mongoose'),
    testSchema = require('./test'),
    Schema = mongoose.Schema,
    moduleSchema = new Schema({
        name: {
            type: String,
            'default': '',
            trim: true
        },
        tests: [testSchema]
    });

module.exports = moduleSchema;