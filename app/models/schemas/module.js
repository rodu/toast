'use strict';
var mongoose = require('mongoose'),
    schemaValidator = require('../../utils/validators/schemaValidator'),
    testSchema = require('./test'),
    schema = new mongoose.Schema({
        name: {
            type: String,
            'default': '',
            trim: true
        },
        children: [testSchema]
    });

mongoose.model('ModuleSchema', schema);

// Validation
schemaValidator.validate(schema).fields(['name', 'children']);

module.exports = schema;