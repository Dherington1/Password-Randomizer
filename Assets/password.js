// Assignment Code
// connect button to a variable 
var generateBtn = document.querySelector("#generate");

// assign varibales to prompts the user to see which will store our data 
var generateBtn = document.querySelector("#generate");
var lowerCase = confirm("Do you want a lowercase?");
var upperCase = confirm("Do you want an uppercase?");
var symbol = confirm("Do you want a symbol?");
var number = confirm("Do you want a number?");
var passwordLength = prompt("Password must be from 8 to 128 charcters in length. How long would you like your password?");
// change our string length into int
var passwordInt = parseInt(passwordLength);

// connect button to a variable 
var generateBtn = document.querySelector("#generate");

// create an if statment that will determine the length of the password based of the users input 
if (passwordInt >= 8 && passwordInt <= 128) {
    // create a function that will only run if the user puts in a valid length for their password 
    function generatePassword() {

      // need to create an empty container for password 
      var emptyContainer = "";
  
      //variables for password 
      var passwordLowerCase = 'abcdefghijklmnopqrstuvwxyz';
      var passwordUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var passwordNumbers = '0123456789';
      var passwordSymbols = "!'#$%&()*+-./;:<>=?@[]{}~^";
  
      // if statements to add the prompts if they were choosen
      if (lowerCase=== true) {
        emptyContainer += passwordLowerCase
      };

      if (upperCase === true) {
        emptyContainer += passwordUpperCase
      };
    
      if (number === true) {
        emptyContainer += passwordNumbers
      };
    
      if (symbol === true) {
        emptyContainer += passwordSymbols
      };
    
      // creating a password with the information given
      // only 4 variables for the user to say yes to so we need a for loop to loop around since the user must have a length over 4 
      var password = '';
      for (var i = 0; i < passwordInt; i++) {
        password += emptyContainer.charAt(Math.floor(Math.random() * emptyContainer.length));
           
      };
      return password;
    };
  
  } else {
    // if user inputs a number less than 7 or greater than 128
    alert("Password must be between 8 and 128 characters.")
  }

  // Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
   
  }

// Add event listener to generate button
// this will allow the functions to work when the button is clicked on 
generateBtn.addEventListener('click', writePassword); 