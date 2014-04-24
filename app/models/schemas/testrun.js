'use strict';
var mongoose = require('mongoose'),
    suiteSchema = require('./suite'),
    schemaValidator = require('../../utils/validators/schemaValidator'),
    schema = new mongoose.Schema({
        name: {
            type: String,
            'default': 'ProjectName',
            trim: true
        },
        creationDate: {
            type: Date,
            'default': Date.now
        },
        children: [suiteSchema]
    });

schemaValidator.validate(schema).fields(['children']);

module.exports = schema;
