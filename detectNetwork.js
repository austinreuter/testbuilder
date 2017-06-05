// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  if (isDiners(cardNumber)) {return 'Diner\'s Club';}
  if (isAmerican(cardNumber)) {return 'American Express';}
  if (isVisa(cardNumber)) {return 'Visa';}
  if (isMaster(cardNumber)) {return 'MasterCard';}
  if (isDiscover(cardNumber)) {return 'Discover';}
  if (isMaestro(cardNumber)) {return 'Maestro';}
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  return 'error';
};
function isDiners(cardNumber) {
  var firstTwo = Number(cardNumber.substring(0, 2));
  if (firstTwo === 38 || firstTwo === 39) {
    return (cardNumber.length === 14);
  }
  return false; 
}
function isAmerican(cardNumber) {
  var firstTwo = Number(cardNumber.substring(0, 2));
  if (firstTwo === 34 || firstTwo === 37) {
    return (cardNumber.length === 15);
  }
  return false;
}
function isVisa(cardNumber) {
  var first = Number(cardNumber.substring(0, 1));
  if (first === 4) {
    return (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19);
  }
  return false;
}
function isMaster(cardNumber) {
  var firstTwo = Number(cardNumber.substring(0, 2));
  if (cardNumber.length === 16) { 
    return (firstTwo >= 51 && firstTwo <= 55);
  }
  return false;
}
function isDiscover(cardNumber) {
  var firstFour = Number(cardNumber.substring(0, 4));
  var firstThree = Number(cardNumber.substring(0, 3));
  var firstTwo = Number(cardNumber.substring(0, 2));
  if (cardNumber.length === 16 || cardNumber.length === 19) {
    return (firstFour === 6011 || firstThree >= 644 && firstThree <= 649 || firstTwo === 65);
  }
  return false;
}
function isMaestro(cardNumber) {
  var firstFour = Number(cardNumber.substring(0, 4));
  if (cardNumber.length >= 12 && cardNumber.length <= 19) {
  	return (firstFour === 5018 || firstFour === 5020 || firstFour === 5038 || firstFour === 6304);
  }
  return false;
}

