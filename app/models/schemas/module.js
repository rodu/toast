'use strict';
var mongoose = require('mongoose'),
    schemaValidatorUtils = require('../../utils/validators/schemaValidatorUtils'),
    testSchema = require('./test'),
    Schema = mongoose.Schema,
    moduleSchema = new Schema({
        name: {
            type: String,
            'default': '',
            trim: true
        },
        children: [testSchema]
    });

mongoose.model('ModuleSchema', moduleSchema);

// Validation
moduleSchema.path('name').validate(schemaValidatorUtils.validateName,
                                      'Module name cannot be blank');

module.exports = moduleSchema;