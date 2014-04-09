'use strict';
var mongoose = require('mongoose'),
    schemaValidatorUtils = require('../../utils/validators/schemaValidatorUtils'),
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
        children: [moduleSchema]
    });

mongoose.model('SuiteSchema', suiteSchema);

// Validation
suiteSchema.path('name').validate(schemaValidatorUtils.validateName,
                                  'Suite name cannot be blank');

module.exports = suiteSchema;
