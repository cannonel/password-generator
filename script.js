// Assignment code here
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//generate password function start
function generatePassword() {
  var lower = "qwertyuiopasdfghjklzxcvbnm";
  var upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var num = "123456789";
  var sym = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var password = "";

  var passwordLength = prompt(
    "How long would you like your password? \r\nMust have a minimum of 8 characters and a max 128 characters"
  );

  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);

  if (passwordLength < 128 && passwordLength >= 8) {
    //next prompt asking about lowercase letters
    var lowercaseYes = confirm(
      "Would you like to include lowercase letters in your password?"
    );
    var uppercaseYes = confirm(
      "Would you like to include uppercase letters in your password?"
    );
    var numericalYes = confirm(
      "Would you like to include numbers in your password?"
    );
    var specialYes = confirm(
      "Would you like to include special characters in your password?"
    );


    for (i = 0; i < passwordLength; i++) {
      if (password.length < passwordLength) {
        if (lowercaseYes) {
          password += upper[Math.floor(Math.random() * lower.length)];
        }
        if (uppercaseYes) {
          password += lower[Math.floor(Math.random() * upper.length)];
        }
        if (numericalYes) {
          password += num[Math.floor(Math.random() * num.length)];
        }
        if (specialYes) {
          password += sym[Math.floor(Math.random() * sym.length)];
        }
      } else {
        break;
      }
    }
    return password;
  } else {
    alert("This password number does not meet the requirements. Try again!");
  }
}
