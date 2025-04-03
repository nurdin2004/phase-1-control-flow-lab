const { expect } = require("chai")

function scuberGreetingForFeet(){
  // Write your code here!
}

describe('scuberGreetingForFeet(feet)',) 
function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet > 400 && feet <= 2000) {
    return 'That will be twenty bucks.';
  } else if (feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(){
  // Write your code here!
 
} 

function addFive(someNumber) {
  
  function addFive(someNumber) {
    if (someNumber > 0) {
      return someNumber + 5;
    }
    return someNumber; // If the number is zero or less, return it unchanged.
  }
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
switch (tip) {
  case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
}
}
