// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  const special = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  passwordText.value = password;


  if(!passwordText.value.length < 8 || !password.value.length >128) {
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
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




