'use strict';

require('should');

var mongoose = require('mongoose'),
    //testModule = require(''),
    AssertionSchema = mongoose.model('AssertionSchema');

describe("<Unit Test>", function() {
    describe("AssertionSchema Unit Tests", function() {
        /*beforeEach(function() {});*/
        var testValidationError = function testValidationError(err, done){
            (err.name).should.equal('ValidationError');
            done();
        };
        // The test ensures that the schema name is validated
        describe("Schema name validation", function() {
            // Instantiates a assertionSchema with an invalid name
            var assertionSchema = new AssertionSchema({
                name: void 0
            });

            it("should return a validation error when name is blank...",
                function(done) {
                return assertionSchema.save(function(err){
                    testValidationError(err, done);
                });
            });

            it("should fail validation is name property is missing...",
                function(done) {
                return (new AssertionSchema({})).save(function(err){
                    testValidationError(err, done);
                });
            });          
        });
    });
});
