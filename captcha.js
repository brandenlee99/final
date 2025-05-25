// Generate CAPTCHA on page load
window.onload = function() {
  generateCaptcha();
};

let num1, num2;

function generateCaptcha() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  document.getElementById('captchaQuestion').textContent = `What is ${num1} + ${num2}?`;
}

document.getElementById('captchaForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const userAnswer = parseInt(document.getElementById('captchaInput').value);
  const correctAnswer = num1 + num2;
  const status = document.getElementById('captchaStatus');

  if (userAnswer === correctAnswer) {
    status.textContent = "✅ CAPTCHA passed!";
    status.style.color = "green";
    // Here you can proceed with form submission or any logic
  } else {
    status.textContent = "❌ Wrong answer, try again.";
    status.style.color = "red";
    generateCaptcha(); // Generate a new CAPTCHA
  }

  document.getElementById('captchaInput').value = ''; // Clear input
});

