// membership form validation (from bootstrap documentation)
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        event.preventDefault(); // Prevent the default form submission (page refresh)
        const formContainer = document.getElementById('form-container');
        // Clear the form container and show the thank you message
        formContainer.innerHTML = `
        <div class="card-body text-center p-5">
        <h2 class="text-success"> Welcome to Essex Gardens Trust!</h2>
        <p class="mb-4">
        Thank you for joining our garden preservation community.
        </p>
        <button class="btn btn-success" onclick="location.reload()">
            Add Another Member
        </button>
        </div>
        `
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// Show/hide joint member field based on membership type selection
const membershipType = document.getElementById('membership-type');
const jointMemberField = document.getElementById('joint-member-field');

membershipType.addEventListener('change', () => {
  if (membershipType.value === 'Joint') {
    jointMemberField.style.display = 'block';
    jointMemberField.querySelector('input').setAttribute('required', 'required');
  } else {
    jointMemberField.style.display = 'none';
    jointMemberField.querySelector('input').removeAttribute('required');
  }
});