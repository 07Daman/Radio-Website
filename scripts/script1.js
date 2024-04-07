document.addEventListener("DOMContentLoaded", function() {
    // Support Form Submission
    document.getElementById("supportForm").addEventListener("submit", function(event) {
        event.preventDefault();
         
        submitSupport();
    });

    function submitSupport() {
        
        alert("Your support request has been submitted successfully!"); 
        document.getElementById("supportForm").reset();
    }
});