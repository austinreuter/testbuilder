// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)


var detectNetwork = function(cardNumber) {
  if (typeof cardNumber !== 'string') {return 'Type error';}
  if (isDiners(cardNumber)) {return 'Diner\'s Club';}
  if (isAmerican(cardNumber)) {return 'American Express';}
  if (isMaster(cardNumber)) {return 'MasterCard';}
  if (isDiscover(cardNumber)) {return 'Discover';}
  if (isMaestro(cardNumber)) {return 'Maestro';}
  if (isChinese(cardNumber)) {return 'China UnionPay';}
  if (isVisa(cardNumber) && isSwitch(cardNumber)) {return 'Switch';}
  if (isVisa(cardNumber)) {return 'Visa';}
  else if (isSwitch(cardNumber)) {return 'Switch';}
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  return 'Read error';
};
function isDiners(cardNumber) {
  var firstTwo = Number(cardNumber.slice(0, 2));
  return ((firstTwo === 38 || firstTwo === 39) && cardNumber.length === 14);
}
function isAmerican(cardNumber) {
  var firstTwo = Number(cardNumber.slice(0, 2));
  return ((firstTwo === 34 || firstTwo === 37) && cardNumber.length === 15);
}
function isVisa(cardNumber) {
  var first = Number(cardNumber.slice(0, 1));
  return (first === 4) && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19);
}
function isMaster(cardNumber) {
  var firstTwo = Number(cardNumber.slice(0, 2));
  return (cardNumber.length === 16) && (firstTwo >= 51 && firstTwo <= 55);
}
function isDiscover(cardNumber) {
  var firstFour = Number(cardNumber.slice(0, 4));
  var firstThree = Number(cardNumber.slice(0, 3));
  var firstTwo = Number(cardNumber.slice(0, 2));
  return ((cardNumber.length === 16 || cardNumber.length === 19) && (firstFour === 6011 || firstThree >= 644 && firstThree <= 649 || firstTwo === 65));
}
function isMaestro(cardNumber) {
  var firstFour = Number(cardNumber.slice(0, 4));
  return (cardNumber.length >= 12 && cardNumber.length <= 19) &&  (firstFour === 5018 || firstFour === 5020 || firstFour === 5038 || firstFour === 6304);
}
function isChinese(cardNumber) {
  var firstThree = Number(cardNumber.slice(0, 3));
  var firstFour = Number(cardNumber.slice(0, 4));
  var firstSix = Number(cardNumber.slice(0, 6));
  if (cardNumber.length >= 16 && cardNumber.length <= 19) {
  	return (firstThree >= 624 && firstThree <= 626 || firstFour >= 6282 && firstFour <= 6288 || firstSix >= 622126 && firstSix <= 622925)
  }
  return false;
}
function isSwitch(cardNumber) {
  var firstFour = Number(cardNumber.slice(0, 4));
  var firstSix = Number(cardNumber.slice(0, 6));
  if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) {
    return (firstFour === 4903 || firstFour === 4905 || firstFour === 4911 || firstFour === 4936 || firstFour === 6333 || firstFour === 6759 || firstSix === 564182 || firstSix === 633110);
  }
  return false;
}

