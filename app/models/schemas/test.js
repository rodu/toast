'use strict';
var mongoose = require('mongoose'),
    assertionSchema = require('./assertion'),
    Schema = mongoose.Schema,
    testSchema = new Schema({
        name: {
            type: String,
            'default': '',
            trim: true
        },
        failed: {
            type: Number,
            'default': 0
        },
        passed: {
            type: Number,
            'default': 0
        },
        duration: {
            type: Number,
            'default': 0
        },
        assertions: [assertionSchema]
    });

module.exports = testSchema;