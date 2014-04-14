'use strict';
var mongoose = require('mongoose'),
    schemaValidator = require('../../utils/validators/schemaValidator'),
    moduleSchema = require('./module'),
    schema = new mongoose.Schema({
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
        children: [moduleSchema]
    });

mongoose.model('SuiteSchema', schema);

// Validation
schemaValidator.validate(schema).fields(['name', 'children']);

module.exports = schema;
