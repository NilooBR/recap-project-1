document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.querySelector('[data-js="darkmode-input"]');
  const body = document.querySelector('[data-js="body"]');

  darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  });
});