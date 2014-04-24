'use strict';
var mongoose = require('mongoose'),
    schemaValidator = require('../../utils/validators/schemaValidator'),
    moduleSchema = require('./module'),
    schema = new mongoose.Schema({
        // The suite name should identify the project by name
        name: {
            type: String,
            'default': 'Suite',
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
        total: {
            type: Number,
            'default': 0
        },
        runtime: {
            type: Number,
            'default': 0
        },
        children: [moduleSchema]
    });

mongoose.model('SuiteSchema', schema);

// Validation
schemaValidator.validate(schema).fields(['children']);

module.exports = schema;
