'use strict';
var mongoose = require('mongoose'),
    assertionSchema = require('./assertion'),
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
        assertions: [assertionSchema]
    });


// Validation
testSchema.path('name').validate(function(name){
    return name.length > 0;
}, 'Test name cannot be blank');

module.exports = testSchema;