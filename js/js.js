// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function() {
  // Set a timeout to show the modal after 5 seconds
  setTimeout(function() {
    // Show the modal
    $('#rugbyCrashCourseModal').modal('show');
  }, 5000); // 5000ms = 5 seconds
});
