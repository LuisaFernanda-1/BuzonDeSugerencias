const form = document.getElementById('question-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('mail').value;
  const message = document.getElementById('msg').value;

  //Envía la pregunta a nuestro sistema usando AJAX o fetch API
  fetch('/send-question', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, message })
  })
 .then(response => response.json())
 .then(data => console.log(data))
 .catch(error => console.error(error));
});