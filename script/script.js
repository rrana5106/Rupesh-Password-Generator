// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// PSEUDO CODE
// 1. Create the prompt for the user password with the criteria
// a. Password length should be between 8 < 128
// b. Password should have at least one option among from (special characters, numbers, uppercase and lowercase).
// 2. Validate the user input.
// 3. Generate password based on criteria
// 4. Display password to the page.

// Function to prompt user for password options
function getPasswordOptions() {
  //Asking user to put value for the password
  let userInput = prompt(
    "How many characters would you like your password to contain?"
  );
  // Checking for the condition if the user left empty
  if (userInput === "" || userInput === null) {
    alert("Please enter the password length.");
  }
  // changing the userInput into integer.
  userInput = parseInt(userInput);

  // Checking for the condition with the userInput if user put the number, greater than 8 and less than 128 or not.
  if (isNaN(userInput)) {
    alert("Please enter the valid number.");
    return getPasswordOptions(); // this will exit the function early and prompt again
  } else if (userInput < 8) {
    alert("The password length must be more than 8.");
    return getPasswordOptions(); // this will exit the function early and prompt again
  } else if (userInput > 128) {
    alert("The password length must be less than 128.");
    return getPasswordOptions(); // this will exit the function early and prompt again
  } else {

    // creating the variable for the user's option
    let addSpec = confirm("Do you want to include special character in you password");
    let addNum = confirm("Do you want to include numeric character in you password");
    let addUp = confirm("Do you want to include uppercase character in you password");
    let addLow = confirm("Do you want to include uppercase  character in you password");

    // checking it atleast one option has been selected by the user
    if (!addSpec && !addNum && !addUp && !addLow) {
      alert("You must choose at least one character type");

      return getPasswordOptions(); // this will exit the function early and prompt again
    }

    //storing the value as user select the options
    let userOptions = {
      length: userInput,
      addSpecial: addSpec,
      addNumeric: addNum,
      addLowcase: addLow,
      addUppercase: addUp,
    };
    return userOptions;
  }
}

// Function for getting a random element from an array

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  //this line will get the password option from the user.
  let userOptions = getPasswordOptions();

  // Initializing the variables
  let allCharacters = [];

  let password = "";

  // Checking and creating the characters accorindinly to the user's choice.
  if (userOptions.addSpecial === true) {
    allCharacters = allCharacters.concat(specialCharacters);
    password = password + getRandom(specialCharacters);
  }
  if (userOptions.addNumeric === true) {
    allCharacters = allCharacters.concat(numericCharacters);
    password += getRandom(numericCharacters);
  }
  if (userOptions.addUppercase === true) {
    allCharacters = allCharacters.concat(upperCasedCharacters);
    password += getRandom(upperCasedCharacters);
  }

  if (userOptions.addLowcase === true) {
    allCharacters = allCharacters.concat(lowerCasedCharacters);
    password += getRandom(lowerCasedCharacters);
  }

  for (let i = password.length; i < userOptions.length; i++) {
    password += getRandom(allCharacters);
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
