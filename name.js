document.addEventListener('DOMContentLoaded', function() {
  var firstNameInput = document.querySelector('#text-00000012');
  var firstNameLabel = document.querySelector('#text-0000001e');

  if (firstNameInput) {
    firstNameInput.addEventListener('input', function() {
      firstNameLabel.value = firstNameInput.value;
    });
  } else {
    console.error("Element with ID 'text-00000012' not found.");
  }
});
