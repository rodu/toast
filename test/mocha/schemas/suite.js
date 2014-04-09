'use strict';

require('should');

var mongoose = require('mongoose'),
    //testModule = require(''),
    ModuleSchema = mongoose.model('ModuleSchema');

describe("<Unit Test>", function() {
    describe("ModuleSchema Unit Tests", function() {
        /*beforeEach(function() {});*/
        var testValidationError = function testValidationError(err, done){
            (err.name).should.equal('ValidationError');
            done();
        };

        // The test ensures that the schema name is validated
        describe("Schema name validation", function() {
            // Instantiates a moduleSchema with an invalid name
            var moduleSchema = new ModuleSchema({
                name: void 0
            });

            it("should return a validation error when name is blank...",
                function(done) {
                return moduleSchema.save(function(err){
                    testValidationError(err, done);
                });
            });

            it("should fail validation is name property is missing...",
                function(done) {
                return (new ModuleSchema({})).save(function(err){
                    testValidationError(err, done);
                });
            });            
        });
    });
});
