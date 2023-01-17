// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  //user input for length of password 
  let length = parseInt( 
    prompt("How many characters / how long do you want your password to be?")
  )
  
  if(isNaN(length) === true){
    alert(`Password length must be provided as a number`)
  }

  if(length < 10) {
    alert(`Password length must be at least 10 characters long`)
  }

  if(length > 64) {
    alert(`Password length must be less than 64 characters long`)
  }

  let hasSpecialChars = confirm(
    "Click OK to confirm if you would like your password to include special characters"
  )

  let hasNumericalChars = confirm(
    "Click OK to confirm if you would like your password to include numerical characters"
  )

  let hasLowerCasedChars = confirm(
    "Click OK to confirm if you would like your password to include lower cased characters"
  )

  let hasUpperCasedChars = confirm(
    "Click OK to confirm if you would like your password to include upper cased characters"
  )

  if (hasSpecialChars === false && 
    hasNumericalChars === false && 
    hasLowerCasedChars === false && 
    hasUpperCasedChars === false) {
      alert(`Must select at least one character type`);
      return;
    }

let passwordOptions = {
  length: length,
  hasSpecialChars: hasSpecialChars,
  hasUpperCasedChars: hasUpperCasedChars,
  hasLowerCasedChars: hasLowerCasedChars,
  hasNumericalChars: hasNumericalChars,
}

console.log(passwordOptions)

return passwordOptions

}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length)
  let rElement = arr[randomIndex];
  return rElement 


}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();

  let result = []


  let possibleChar = []

  let guaranteedChar = []


  if (options["hasSpecialChars"]){
    possibleChar = possibleChar.concat(specialCharacters);
    guaranteedChar.push(getRandom(specialCharacters))
  }

  if(options["hasLowerCasedChars"]) {
    possibleChar = possibleChar.concat(lowerCasedCharacters);
    guaranteedChar.push(getRandom(lowerCasedCharacters))
  }

  if(options["hasUpperCasedChars"]) {
    possibleChar = possibleChar.concat(upperCasedCharacters);
    guaranteedChar.push(getRandom(upperCasedCharacters))
  }

  if(options["hasNumericalChars"]) {
    possibleChar = possibleChar.concat(numericCharacters);
    guaranteedChar.push(getRandom(numericCharacters))
  }

  for(let index= 0; index < options.length; index++){
    var randomChar = getRandom(possibleChar);
    result.push(randomChar)
    }

  for(let index= 0; index < guaranteedChar.length; index++){
    result[index] = guaranteedChar[index];
  }

    console.log(result);

    return result.join("")


}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);