const loadBtn = document.getElementById('load-btn');
const toggleBtn = document.getElementById('toggleBtn');
const infoPanel = document.getElementById('infoPanel');

loadBtn.addEventListener('click', () => {
  if (loadBtn.classList.contains('loading')) return;

  loadBtn.classList.add('loading');
  loadBtn.textContent = 'Submitting';

  setTimeout(() => {
    loadBtn.classList.remove('loading');
    loadBtn.textContent = 'Submitted';
  }, 2000);
});

toggleBtn.addEventListener('click', () => {
  const isPressed = toggleBtn.getAttribute('aria-pressed') === 'true';

  toggleBtn.setAttribute('aria-pressed', String(!isPressed));
  infoPanel.hidden = isPressed;
});
