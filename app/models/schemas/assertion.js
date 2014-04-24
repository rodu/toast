'use strict';
var mongoose = require('mongoose'),
    schemaValidator = require('../../utils/validators/schemaValidator'),
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
        },
        module: {
            type: String,
            'default': '',
            trim: true
        }
    });

mongoose.model('AssertionSchema', schema);

// Validation
schemaValidator.validate(schema).fields(['name']);

module.exports = schema;