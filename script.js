// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var firstPrompt = function() {
  var passwordLength = prompt("How long would you like your password? \r\nMust have a minimum of 8 characters and a max 128 characters");

  if (passwordLength < 128 && passwordLength >= 8) {
  //next prompt

} else{
  alert("This password number does not meet the requirements. Try again!");
  firstPrompt();
}
};


firstPrompt();





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
