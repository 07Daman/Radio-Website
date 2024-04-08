// This event listener ensures that the DOM content is fully loaded before executing the JavaScript code.
document.addEventListener("DOMContentLoaded", function () {
  // Support Form Submission
  // Attaches an event listener to the submit event of the support form
  document
    .getElementById("supportForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevents the default form submission behavior

      submitSupport(); // Calls the function to handle support form submission
    });

  // Function to handle support form submission
  function submitSupport() {
    alert("Your support request has been submitted successfully!"); // Display an alert indicating successful submission
    document.getElementById("supportForm").reset(); // Resets the support form after submission
  }
});
