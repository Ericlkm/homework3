// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){
var length = window.prompt("password must be between 8 and 128 characters long!");
var includeUpperCase = confirm(" password needs to contain upperCase letters!");
var includeLowerCase = confirm(" password needs to contain lowerCase letters!");
var includesymbols = confirm(" password needs to contain symbols!");
var includeNumbers = confirm(" password needs to contain numbers!");


var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var symbols = "!@#$%^&*()_+:><?|";
var numbers = "0123456789";
var randomSele = "";


if(length < 8 || length > 128){
  window.alert("password must be between atleast 8 and 128 characters!");
  var length = window.prompt("password must be atlease 12 characters");
}

if(upperCase === false && lowerCase === false && symbols === false && numbers === false){
  return "password does not meet the requirements";
};

var upperCase = confirm("you should have upperCase letters");
var lowerCase = confirm("you should have lowerCase letters");
var symbols = confirm("you should have symbols letters");
var numbers = confirm("you should have numbers letters");



if(upperCase) {randomSele += includeUpperCase}
if(lowerCase) {randomSele += includeLowerCase;}
if(symbols) {randomSele += includesymbols;}
if(numbers) {randomSele += includeNumbers;}

let finalPassword = " ";
for(let i = 0; i < length; i++){
  let pass = [Math.floor(Math.random() * randomSele.length)];
  finalPassword = finalPassword + randomSele[pass];
}
return finalPassword;
};



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


