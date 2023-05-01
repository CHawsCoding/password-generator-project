
function generatePassword() {
    
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
  
    let password = "";
  
    const passwordLength = parseInt(prompt("Enter password length (between 8 and 128 characters):"));
  
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Invalid password length. Please enter a number between 8 and 128.");
      return "";
    }
  
    const includeUppercase = confirm("Include uppercase letters?");
    const includeLowercase = confirm("Include lowercase letters?");
    const includeNumbers = confirm("Include numbers?");
    const includeSymbols = confirm("Include symbols?");
  
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
      alert("Please choose at least one character type to include in the password.");
      return "";
    }
  
    
    let chars = "";
  
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
  
    
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    return password;
  }
  
  
  function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  
  const generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", writePassword);