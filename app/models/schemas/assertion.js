'use strict';
var mongoose = require('mongoose'),
    schemaValidatorUtils = require('../../utils/validators/schemaValidatorUtils'),
    schema = new mongoose.Schema({
        result: {
            type: Boolean,
            'default': false
        },
        expected: {
            type: Object
        },
        actual: {
            type: Object
        },
        name: {
            type: String,
            'default': '',
            trim: true
        },
        source: { // the error stacktrace if any
            type: String,
            'default': '',
            trim: true
        },
        message: {
            type: String,
            'default': '',
            trim: true
        }
    });

mongoose.model('AssertionSchema', schema);

// Validation
schemaValidatorUtils.validate(schema).fields(['name']);

module.exports = schema;