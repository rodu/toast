'use strict';
var mongoose = require('mongoose'),
    suiteSchema = require('./suite'),
    Schema = mongoose.Schema,
    testRunSchema = new Schema({
        creationDate: {
            type: Date,
            'default': Date.now
        },
        children: [suiteSchema]
    });

module.exports = testRunSchema;
