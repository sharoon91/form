document.addEventListener('DOMContentLoaded', function() {
    var firstNameInput = document.getElementById('text-00000012');
    var firstNameLabel = document.getElementById('text-0000001e');
  
    if (firstNameLabel) {
      firstNameInput.addEventListener('input', function() {
        firstNameLabel.value = firstNameInput.value;
      });
    } else {
      console.error("Element with ID 'text-0000001e' not found.");
    }
  });
