'use strict';

function validateName(name){
    return typeof name === 'string' && name.length > 0;
}

module.exports = {
    validateName: validateName
};
