'use strict';

require('should');

var mongoose = require('mongoose'),
    //testModule = require(''),
    TestSchema = mongoose.model('TestSchema');

describe("<Unit Test>", function() {
    describe("TestSchema Unit Tests", function() {
        /*beforeEach(function() {});*/
        var testValidationError = function testValidationError(err, done){
            (err.name).should.equal('ValidationError');
            done();
        };

        // The test ensures that the schema name is validated
        describe("Schema name validation", function() {
            // Instantiates a testSchema with an invalid name
            var testSchema = new TestSchema({
                name: void 0
            });

            it("should return a validation error when name is blank...",
                function(done) {
                return testSchema.save(function(err){
                    testValidationError(err, done);
                });
            });

            it("should fail validation is name property is missing...",
                function(done) {
                return (new TestSchema({})).save(function(err){
                    testValidationError(err, done);
                });
            });            
        });
    });
});
