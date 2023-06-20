
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      // Reset error messages
      nameError.textContent = '';
      emailError.textContent = '';
      passwordError.textContent = '';
      confirmPasswordError.textContent = '';

      // Validate name
      //trim() remove white space
      if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        nameInput.focus();
        return;
      }
      if (!/^[A-Za-z]+$/.test(nameInput.value)) {
        nameError.textContent = 'Name should contain only letters.';
        nameInput.focus();
        return;
      }

      // Validate email
      if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        emailInput.focus();
        return;
      }
      if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailError.textContent = 'Invalid email format.';
        emailInput.focus();
        return;
      }

      // Validate password
      if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password should have a minimum length of 8 characters.';
        passwordInput.focus();
        return;
      }
      if (!/[a-z]/.test(passwordInput.value) || !/[A-Z]/.test(passwordInput.value) || !/[0-9]/.test(passwordInput.value)) {
        passwordError.textContent = 'Password should contain at least one uppercase letter, one lowercase letter, and one digit.';
        passwordInput.focus();
        return;
      }

      // Validate confirm password
      if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        confirmPasswordInput.focus();
        return;
      }
      form.submit();
    });
  