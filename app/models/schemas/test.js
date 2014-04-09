'use strict';
var mongoose = require('mongoose'),
    assertionSchema = require('./assertion'),
    schemaValidatorUtils = require('../../utils/validators/schemaValidatorUtils'),
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
        children: [assertionSchema]
    });

mongoose.model('TestSchema', testSchema);

// Validation
testSchema.path('name').validate(schemaValidatorUtils.validateName,
                                 'Test name cannot be blank');

module.exports = testSchema;