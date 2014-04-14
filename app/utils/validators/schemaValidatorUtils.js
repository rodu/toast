'use strict';

var validators = {
        name: {
            logic: function(name){
                return typeof name === 'string' && name.length > 0;
            },
            message: 'Name cannot be blank'
        },
        children: {
            logic: function(children){
                return Array.isArray(children) && children.length > 0;
            },
            message: 'Should contain at least one child'
        }
    };

function validateName(name){
    return typeof name === 'string' && name.length > 0;
}

function validate(schema){
    return {
        fields: function(fields){
            fields.every(function(el){
                var validator = validators[el],
                    path = schema.path(el);
                if (validator && path){
                    return path.validate(validator.logic, validator.message);
                }
                else {
                    throw new Error('Validator or path does not exists! ' + el);
                }
            });
        }
    };
}

module.exports = {
    validate: validate,
    validateName: validateName
};
