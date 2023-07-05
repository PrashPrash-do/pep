
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get the values from the form
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var message = document.querySelector('textarea[name="message"]').value;

    // ...
  
    // Clear the form fields
    document.querySelector('input[name="name"]').value = '';
    document.querySelector('input[name="email"]').value = '';
    document.querySelector('textarea[name="message"]').value = '';
  
    // Display a success message
    alert('Form submitted successfully!');
  });
  