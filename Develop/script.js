const numbers = [1,2,3,4,5,6,7,8,9,0];
const symbols = ['!','@','#','$','%','^','&','*','+'];

const characterCodes = Array.from(Array(26)).map( (_, i) => i + 97);
const lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
const uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());

let lengthChoice = prompt('How many characters would you like your password to be?');
let numberChoice = prompt('Would you like to allow numbers?');
let symbolChoice = prompt('Would you like to allow symbols?');
let lowerChoice = prompt('Would you like to allow Lowercase letters?');
let upperChoice = prompt('Would you like to allow Uppercase letters?');


// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(lengthChoice, numberChoice, symbolChoice, lowerChoice, upperChoice) {
  
  let useTheseChars = [
    ...(symbolChoice ? symbols : []),
    ...(numberChoice ? numbers : []),
    ...(lowerChoice ? lowercaseLetters : []),
    ...(upperChoice ? uppercaseLetters : []),
  ];

  
  let pw = '';
  let length = lengthChoice;

  if (useTheseChars.length === 0) return '';

  for (let i = 0; i <length; i++ ) {
    const randomIndex = Math.floor(Math.random() * useTheseChars.length);
    pw += useTheseChars[randomIndex];
  }
  return pw;
}

console.log(generatePassword(lengthChoice, numberChoice, symbolChoice, lowerChoice, upperChoice));

// // Write password to the #password input
function writePassword() {
  var password = generatePassword(lengthChoice, numberChoice, symbolChoice, lowerChoice, upperChoice);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
