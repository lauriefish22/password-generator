var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

function generatePassword() {
  let charLength = window.prompt("Enter in your desired number of characters");
  if (charLength < 8 || charLength > 128) {
    window.alert("Password must be between 8 and 128 characters.")
  } else {
    let lowerCase = window.confirm("Would you like lowercase letters in your password?"); 
    let upperCase = window.confirm("Would you like uppercase letters in your password?");
    let specChar = window.confirm("Would you like to include special characters?");
    let digits = window.confirm("Would you like to include numeric values?");
    let newPassword = "";
    let lowerCaseValue = "abcdefghijklmnopqrstuvWxyz";
    let upperCaseValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let digitsValue = "0123456789";
    let specialCharValue = "#$%&()*+,-.:;<=>?@[]^_{|}~"; 
    let availableChar = "";

    if (lowerCase == true) {
      availableChar += lowerCaseValue;
    }
    if (upperCase == true) {
      availableChar += upperCaseValue;
    }
    if (specChar == true) {
      availableChar += specialCharValue;
    }
    if (digits == true) {
      availableChar += digitsValue;
    }

    let availableCharLength = availableChar.length;
    let availableCharArr = availableChar.split("");

    for (let i = 0; i < charLength; i++) {
      
      let randomChar = Math.floor(Math.random() * availableCharLength);
      console.log(randomChar);
      console.log(availableCharArr[randomChar-1]);
      newPassword += availableCharArr[randomChar-1];
    }
    return newPassword;
  }
  return "Password conditions not met";
}
