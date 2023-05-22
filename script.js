var nameField = document.getElementById('#text-00000012');

var displayField = document.getElementById('#text-0000001e');

nameField.addEventListener('input', function() {
  displayField.value = nameField.value;
});
