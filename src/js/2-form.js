document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');

  const storedData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  form.email.value = storedData.email || '';
  form.message.value = storedData.message || '';

  form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    const currentState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
    const newState = { ...currentState, [name]: value };
    localStorage.setItem('feedback-form-state', JSON.stringify(newState));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    localStorage.removeItem('feedback-form-state');
    form.reset();

    const formData = {
      email: form.email.value,
      message: form.message.value,
    };
    console.log(formData);
  });
});