// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input






function writePassword() {

   var correctPrompts = makePrompts();
   var passwordText = document.querySelector("#password");
   if(correctPrompts){
     var createPassword = generatePassword();
     passwordText.value = createPassword;
   }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var length = "";
var choice = [];

var upperCase = ["A","B","C","D","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symbols = ["!","@","#","$","%","^","&","*","(",")","`","~","-","=",";"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];





function generatePassword(){
var password =[];
for(var i = 0; length; i++){
  var random = Math.floor(Math.random() * choice.length);
  password = password + choice[random];
}
return password;
}

function makePrompts(){
  choice = "";
    length = parseInt(prompt("password needs to be between 8-128 \nchoose desired number!"));
    
    if(isNaN(length) || length < 8 || length > 128){
      alert("chosen number must be between 8 - 128!")
      return false;
    }

    if(confirm("would you like upperCase letters?")){
      choice = choice.concat(upperCase);
    }
    
    if(confirm("would you like lowerCase letters?")){
      choice = choice.concat(lowercase);
    }

    if(confirm("would you like special symbols?")){
      choice = choice.concat(symbols);
    }

    if(confirm("would like numbers?")){
      choice = choice.concat(numbers);
    }
    return true;
}

