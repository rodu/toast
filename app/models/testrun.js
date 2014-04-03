'use strict';
var mongoose = require('mongoose'),
    assertionSchema = require('./schemas/assertion'),
    Schema = mongoose.Schema,

    TestSchema = new Schema({
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
    }),

    ModuleSchema = new Schema({
        name: {
            type: String,
            'default': '',
            trim: true
        },
        tests: [TestSchema]
    }),

    SuiteSchema = new Schema({
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
        modules: [ModuleSchema]
    }),

    TestRunSchema = new Schema({
        creationDate: {
            type: Date,
            'default': Date.now
        },
        suites: [SuiteSchema]
    });

mongoose.model('TestRun', TestRunSchema);
