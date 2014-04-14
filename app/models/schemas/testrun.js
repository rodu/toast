'use strict';
var mongoose = require('mongoose'),
    suiteSchema = require('./suite'),
    Schema = mongoose.Schema,
    testRunSchema = new Schema({
        creationDate: {
            type: Date,
            'default': Date.now
        },
        children: [suiteSchema]
    });

testRunSchema.path('children').validate(function(children){
    return Array.isArray(children) && children.length > 0;
});

module.exports = testRunSchema;
