// Assignment code here
function specialCheck(_string) {
const special = !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
for (var i = 0; i < _string.length; i++) {
 if ??????
}
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


if (password.value.length > 8 && password.value < 120 && *Sp.char.*) {
  msg="success"
  alert(msg);
}else if(password.value.length < 8) {
  msg="password needs to be more than 8 characters."
  alert(msg); 
}
 else if (password.value.length > 120) {
  msg="You can't have more than 128 characters"
  alert(msg);
}
/*else if (special characters) {
  alert: you need at least 2 special characters.
}*/
