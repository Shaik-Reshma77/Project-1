// Feedback form submission handler
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (email && message) {
      alert("Thank you for your feedback!");
      form.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });

  // Popup handling for interest buttons
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");
  const popup = document.getElementById("thank-you-popup");
  const closeBtn = document.querySelector(".close-btn");

  yesBtn.addEventListener("click", () => {
    popup.style.display = "block";
  });

  noBtn.addEventListener("click", () => {
    alert("No problem! Let us know if you change your mind.");
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target == popup) {
      popup.style.display = "none";
    }
  });
});
