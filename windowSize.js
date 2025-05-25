"use strict";

onload = function getSize()
{
    let w = this.document.documentElement.clientWidth;
    let h = this.document.documentElement.clientHeight;
    this.document.getElementById( 'wh' ).innerHTML = "<h1> width: " + w + "<br />" + "Height:" + h + "<h1>"
}
window.addEventListener('resize', getSize);
function generateCaptcha() {
      // Generate a random CAPTCHA string (e.g., 5-character alphanumeric)
      // and display it in the .captcha-display element
    }

    function validateCaptcha() {
      // Get user input from the #captcha-input element
      // Compare the user's input with the generated CAPTCHA string
      // Provide feedback in the .feedback paragraph
    }