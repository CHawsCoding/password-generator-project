//Build the function fro generating a password that meets all the requirements in the README
function generatePassword() {
    // Set all of the possible characters - each in their own variable so we can ask about them individually to the user
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = `!"#$%&'()*+,-./:;<=>?@[]^_{|}~`;

    // Create a variable where the password can be stored once we generate it based on user input
    let password = "";
    //ask user how long they want the password to be, between 8 and 128 characters.
    const passwordLength = parseInt(prompt("Enter password length (between 8 and 128 characters):"));
    // if the user puts in a non-number we need to reject it and loop back to the prompt.
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Invalid password length. Please enter a number between 8 and 128.");
      return "";
    }
    // ask the user if they want to include each type of character
    const includeUppercase = confirm("Include uppercase letters?");
    const includeLowercase = confirm("Include lowercase letters?");
    const includeNumbers = confirm("Include numbers?");
    const includeSymbols = confirm("Include symbols?");
    //if the user rejects every type then reject it and loop them back
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
      alert("Please choose at least one character type to include in the password.");
      return "";
    }
  
    // Make a variable to store the types of characters we are keeping
    let chars = "";
    // if statement to check if each character type was confirmed and if true it will add that type to the variable
    if (includeUppercase) {
      chars += upperChars;
    }
  
    if (includeLowercase) {
      chars += lowerChars;
    }
  
    if (includeNumbers) {
      chars += numberChars;
    }
  
    if (includeSymbols) {
      chars += symbolChars;
    }
  
    // a for loop to generate the amount of characters the user selected in the character type(s) they selected
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    return password;
  }
  
  
  // function to write the password for the screen
  function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  
  const generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", writePassword);