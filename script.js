// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
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
    
  
  }


}






  /*if(!passwordText.value.length < 8 || !password.value.length >128) {
    msg="password needs to be more than 8 characters and less than 128"
    alert(msg); 
  
  } else if (passwordText.value.length < 128 && password.value.length >=8) {
    msg="success"
    alert(msg);
  
  } else if (passwordText.value.length < 1 (special)) {
    msg="You need at at least one special character"
    alert(msg);
  
  } else (passwordText.value.length >= 8 && password.value.length < 128 && passwordText.value.length > 1(special)) {
    msg="success"
    alert(msg);
  }
  
}*/
// const special = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




