const numbers = [1,2,3,4,5,6,7,8,9,0];
const symbols = ['!','@','#','$','%','^','&','*','+'];

const characterCodes = Array.from(Array(26)).map( (_, i) => i + 97);
const lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
const uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());




// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(length, numberChoice, symbolChoice, lowerChoice, upperChoice) {
  
  let useTheseChars = [
    ...(symbolChoice ? symbols : []),
    ...(numberChoice ? numbers : []),
    ...(lowerChoice ? lowercaseLetters : []),
    ...(upperChoice ? uppercaseLetters : []),
  ];

  
  let pw = '';
  

  if (useTheseChars.length === 0) return '';

  for (let i = 0; i <length; i++ ) {
    const randomIndex = Math.floor(Math.random() * useTheseChars.length);
    pw += useTheseChars[randomIndex];
  }
  return pw;

}



// // Write password to the #password input
function writePassword() {
  let length = prompt('How many characters would you like your password to be? Must be between 8-128 characters.');
  let numberChoice = confirm('Would you like to allow numbers?');
  let symbolChoice = confirm('Would you like to allow symbols?');
  let lowerChoice = confirm('Would you like to allow Lowercase letters?');
  let upperChoice = confirm('Would you like to allow Uppercase letters?');
  var password = generatePassword(length, numberChoice, symbolChoice, lowerChoice, upperChoice);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
