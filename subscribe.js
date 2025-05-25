// subscribe.js
document.addEventListener("DOMContentLoaded", function() {
  const subscribeButton = document.getElementById("subscribe-button");

  if (subscribeButton) {
    subscribeButton.addEventListener("click", function() {
      alert("Thank you for subscribing! 🎉");
    });
  }
});