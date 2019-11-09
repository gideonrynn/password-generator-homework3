 
 //when the Generate Password button is clicked, the following function should run//
 function generatePassword() {

    //create variables for each set of characters that can be pulled into the password//

    var stringNumbers = "0123456789";

    var stringUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var stringLowerCase = "abcdefghijklmnopqrstuvwxyz";

    var stringSpecial = "!#$%&'()*+,-./:;<=>?@[]\^_`{|}~";

    //Empty variable for characters to pull into based on user selections//
    var newPassword = "";

    //Empty variable to collect string arrays based on userCharacter choices//
    var newString = "";

    
    //Prompt user to enter the number of characters//
    var userCharLength = prompt("How many characters do you want your password to be? (between 8 - 128)");

    if (userCharLength === "" || userCharLength < 8 || userCharLength > 128) {
      alert ("Character length must be between 8 and 128");
    }

    else {

    var userChoiceNumbers = confirm("Add numeric characters?  (ex/0123)");

    var userChoiceUpperCase = confirm("Add uppercase characters?  (ex/ABC)");

    var userChoiceLowerCase = confirm("Add lowercase characters?  (ex/abc)");

    
    var userChoiceSpecial = confirm("Add special characters?  (ex/?!K@)");

    //if the user does not enter a character length between 8 and 128, or does not enter anything, alert the user and break processing//

      if (userChoiceSpecial) {
        newString += stringSpecial;
      }
      
      if (userChoiceNumbers) {
        newString += stringNumbers;
      }
        
      if (userChoiceUpperCase) {
        newString += stringUpperCase;
      }
          
      if (userChoiceLowerCase) {
        newString += stringLowerCase;
      }
    
    }

    //use a for loop to fill newPassword from newString until length of characters requested by user are met//
    for (var i = 0; i < userCharLength; i++) {
      
    newPassword = newPassword + newString.charAt(Math.floor(Math.random() * Math.floor(newString.length))); 
    }

    //add newPassword to Generate Password box in displaypw text input//
    document.getElementById("displaypw").value = newPassword;

}

function copyToClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("displaypw");
  
    /* Select the text field */
    copyText.select();
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }