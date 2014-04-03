'use strict';
var mongoose = require('mongoose'),
    moduleSchema = require('./module'),
    Schema = mongoose.Schema,
    suiteSchema = new Schema({
        // The suite name should identify the project by name
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
        modules: [moduleSchema]
    });

module.exports = suiteSchema;