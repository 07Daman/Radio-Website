document.addEventListener("DOMContentLoaded", function() {
  // Feedback Form Submission
  document.getElementById("feedbackForm").addEventListener("submit", function(event) {
      event.preventDefault();
      submitFeedback();
      resetStars(); // Reset stars after feedback submission
  });

  // Function to submit feedback
  function submitFeedback() {
      alert("Thank you for your feedback!");
      document.getElementById("feedbackForm").reset();
  }

  // Function to reset stars to zero
  function resetStars() {
      const stars = document.querySelectorAll('.star');
      stars.forEach(star => {
          star.classList.remove('active');
      });
  }

  // JavaScript function to handle rating
  function rate(rating) {
      const stars = document.querySelectorAll('.star');
      stars.forEach((star, index) => {
          if (index < rating) {
              star.classList.add('active');
          } else {
              star.classList.remove('active');
          }
      });
  }

  // Event listeners for the stars
  const stars = document.querySelectorAll('.star');
  stars.forEach((star, index) => {
      star.addEventListener('click', () => {
          rate(index + 1); // Rating is index + 1
      });
  });
});

// Event listener for adding to cart
document.addEventListener("DOMContentLoaded", function () {
  const addToCartBtn = document.getElementById("addToCartBtn");

  addToCartBtn.addEventListener("click", function () {
      addToCart();
  });

  // Function to add to cart
  function addToCart() {
      alert("Product added to cart!");
  }
});

