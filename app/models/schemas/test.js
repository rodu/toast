'use strict';
var mongoose = require('mongoose'),
    assertionSchema = require('./assertion'),
    schemaValidator = require('../../utils/validators/schemaValidator'),
    schema = new mongoose.Schema({
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

mongoose.model('TestSchema', schema);

// Validation
schemaValidator.validate(schema).fields(['name', 'children']);

module.exports = schema;