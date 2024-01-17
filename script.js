

//Assignment Code + Event Listener to prompt questions when button pushed
/*document.querySelector("#generate").addEventListener("click", writePassword);

// Various Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain? \nmust be between (8-128)"));

  
  while(confirmLength <= 8|| confirmLength >= 128) {
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

       
      alert(`Your password will have ${confirmLength} characters`);

    
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
      
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
    } 

      
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}*/



document.querySelector("#generate").addEventListener("click", writePassword);


var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", "|", "-", "`", "~", "?" ];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];

var confirmLength = "";
var confirmUpperCase;
var confirmLowerCase;
var confirmSymbols;
var confirmNumbers;

function generatePassword(){
  var confirmLength = (prompt("Select how many characters you would like in your password? \nchoose between (8-128"));

   while(confirmLength <= 8 || confirmLength >= 128){
    alert("password must be between 8-128");
    var confirmLength = prompt("how many characters would you like in password!");
   }

   alert("your password will have " + confirmLength + " characters!");

   var confirmUpperCase = confirm("would you like upperCase characters?");
   var confirmLowerCase = confirm("would you like lowerCase characters?");
   var confirmSymbols = confirm("would you like special symbols in password?");
   var confirmNumbers = confirm("would you like numbers in your password?");

   if(confirmUpperCase === false && confirmLowerCase === false && confirmNumbers === false && confirmSymbols === false){
    alert("you must choose atleast one of these options!");
    var confirmUpperCase = confirm("would you like upperCase characters?");
    var confirmLowerCase = confirm("would you like lowerCase characters?");
    var confirmSymbols = confirm("would you like special symbols in password?");
    var confirmNumbers = confirm("would you like numbers in your password?"); 
   }

   var passwordChar = [];

   if(confirmUpperCase){
    passwordChar = passwordChar.concat(upperCase)
   }

   if(confirmLowerCase){
    passwordChar = passwordChar.concat(lowerCase)
   }

   if(confirmSymbols){
    passwordChar = passwordChar.concat(symbols)
   }

   if(confirmNumbers){
    passwordChar = passwordChar.concat(numbers)
   }

   var randomPassword = "";
   

   for(var i = 0; i < confirmLength; i++){
    randomPassword = randomPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)]
   }
   return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




