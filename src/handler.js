'use strict';

module.exports.generateRandomNumber = event => {
 const randomNumber = parseInt(Math.random()*100);
 console.log('The Random Generated Number is : ', randomNumber);
 return randomNumber;
};
