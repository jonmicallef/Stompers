document.addEventListener("DOMContentLoaded", function() {
  // Set a timeout to show the modal after 5 seconds
  setTimeout(function() {
    // Show the modal
    $('#rugbyCrashCourseModal').modal('show');
  }, 5000); // 5000ms = 5 seconds

  // Handle the sign-up button click
  document.getElementById('signUpButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default button action
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeSJ2uCmMwiFD7MooEiC3pc4ij-Y3XlXnTiT5eKHdOOhzPm6g/viewform', '_blank'); // Open the link in a new tab
  });
});
