fetch('events_edit.json')
  .then(response => response.json())
  .then(data => {
    const eventsContainer = document.getElementById('events-container');

    data.events.forEach((event, index) => {
      const eventCard = document.createElement('div');
      eventCard.classList.add('col-md-4', 'mb-4');

      eventCard.innerHTML = `
        <div class="fade-in-up fade-delay-${index + 1}">
          <div class="card h-100 shadow">
            <img src="${event.image}" class="card-img rounded-3" alt="Event ${index + 1} Image">
            <div class="card-body">
              <h5 class="card-title">${event.title}</h5>
              <p class="card-text">${event.description}</p>
              <p class="card-text">
                <small class="text-muted">
                  <i class="bi bi-calendar-event"></i> ${event.date}
                </small>
              </p>
              <a href="${event.link}" class="btn btn-primary">Book on Eventbrite</a>
            </div>
          </div>
        </div>
      `;

      eventsContainer.appendChild(eventCard);
    });
  })
  .catch(error => console.error('Error fetching events:', error));

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
        <h2 class="text-success">Thanks for contacting us!</h2>
        <p class="mb-4">
        We will get back to you as soon as possible.
        </p>
        <button class="btn btn-success" onclick="location.reload()">
            Add Another Message
        </button>
        </div>
        `
      }

      form.classList.add('was-validated')
    }, false)
  })
})()



