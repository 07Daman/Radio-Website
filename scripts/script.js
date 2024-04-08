// This event listener ensures that the DOM content is fully loaded before executing the JavaScript code.
document.addEventListener("DOMContentLoaded", function () {
  // Feedback Form Submission
  document
    .getElementById("feedbackForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevents the default form submission behavior
      submitFeedback(); // Calls the function to handle feedback submission
    });

  // Function to handle feedback submission
  function submitFeedback() {
    // Debugging: Display an alert to indicate that feedback has been received
    alert("Thank you for your feedback!");
    document.getElementById("feedbackForm").reset(); // Resets the form after submission
  }

  // Function to handle rating
  function rate(rating) {
    const stars = document.querySelectorAll(".star"); // Selects all elements with class 'star'
    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add("active"); // Adds the 'active' class to stars up to the selected rating
      } else {
        star.classList.remove("active"); // Removes the 'active' class from stars beyond the selected rating
      }
    });
  }

  // Another event listener for the 'DOMContentLoaded' event to ensure that the cart functionality is loaded after the DOM is fully ready.
  document.addEventListener("DOMContentLoaded", function () {
    const addToCartBtn = document.getElementById("addToCartBtn");

    // Event listener for the 'click' event on the 'Add to Cart' button
    addToCartBtn.addEventListener("click", function () {
      addToCart(); // Calls the function to handle adding the product to the cart
    });

    // Function to handle adding the product to the cart
    function addToCart() {
      // Add your cart functionality here
      alert("Product added to cart!"); // Display an alert indicating that the product has been added to the cart
    }
  });
});
