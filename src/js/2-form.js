document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const localStorageKey = 'feedback-form-state';

  const storedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
  form.email.value = storedData.email || '';
  form.message.value = storedData.message || '';

  form.addEventListener('input', event => {
    const { name, value } = event.target;
    const currentState =
      JSON.parse(localStorage.getItem(localStorageKey)) || {};
    const newState = { ...currentState, [name]: value.trim() }; 
    localStorage.setItem(localStorageKey, JSON.stringify(newState));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    localStorage.removeItem(localStorageKey);
    form.reset();

    const formData = {
      email: storedData.email,
      message: storedData.message,
    };
    console.log(formData);
  });
});
