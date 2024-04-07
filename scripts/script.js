document.addEventListener("DOMContentLoaded", function() {
  // Feedback Form Submission
  document.getElementById("feedbackForm").addEventListener("submit", function(event) {
      event.preventDefault();
      submitFeedback();
  });

  function submitFeedback() {
       // Debugging: Check if the function is called
      alert("Thank you for your feedback!");
      document.getElementById("feedbackForm").reset();
  }
});


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
        


        document.addEventListener("DOMContentLoaded", function () {
            const addToCartBtn = document.getElementById("addToCartBtn");

            addToCartBtn.addEventListener("click", function () {
                addToCart();
            });

            function addToCart() {
                // Add your cart functionality here
                alert("Product added to cart!");
            }
        });
        
    
