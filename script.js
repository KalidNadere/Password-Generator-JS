// Generate random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate secure password based on the selected criteria
function generatePassword() {
  // Prompt for password length
  var length = parseInt(prompt('Enter the length of the password (between 8 and 128 characters):'));

  // Validate the password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert('Invalid password length. Please try again.');
    return;
  }

// Prompt for character types
var includeLowercase = confirm('Include lowercase characters?');
var includeUppercase = confirm('Include uppercase characters?');
var includeSpecial = confirm('Include special characters?');
var includeNumeric = confirm('Include numeric characters?');

// Validate at least one character type is selected
if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
  alert('You must select at least one character type. Please try again.');
  return;
}

// Define character pools based on selected criteria
var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialChars = '?<>!@#$%^&*()_-=+';
var numericChars = '0123456789';

// Build character pool based on selected criteria
var charPool = '';
if (includeLowercase) {
  charPool += lowercaseChars;
}
if (includeUppercase) {
  charPool += uppercaseChars;
}
if (includeSpecial) {
  charPool += specialChars;
}
if (includeNumeric) {
  charPool += numericChars;
}

// Generate password generated
var password = '';
for (var i = 0; i < length; i++) {
  var randomIndex = getRandomInt(0, charPool.length - 1);
  password += charPool.charAt(randomIndex);
}

// Return password generated
return password;
}
// Adding event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', function () {

// Write password to the #password input
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
  passwordText.value = password;
  }
});