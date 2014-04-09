'use strict';
var mongoose = require('mongoose'),
    schemaValidatorUtils = require('../../utils/validators/schemaValidatorUtils'),
    Schema = mongoose.Schema,
    assertionSchema = new Schema({
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

mongoose.model('AssertionSchema', assertionSchema);

// Validation
assertionSchema.path('name').validate(schemaValidatorUtils.validateName,
                                      'Assertion name cannot be blank');

module.exports = assertionSchema;