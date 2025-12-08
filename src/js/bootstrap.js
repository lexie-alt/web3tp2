const toggle = document.getElementById('nightModeToggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('night-mode');
});