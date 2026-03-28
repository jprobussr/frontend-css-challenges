const loadBtn = document.getElementById('loadBtn');

loadBtn.addEventListener('click', () => {
  if (loadBtn.classList.contains('loading')) return;

  loadBtn.classList.add('loading');
  loadBtn.textContent = 'Submitting...';

  setTimeout(() => {
    loadBtn.classList.remove('loading');
    loadBtn.textContent = 'Submitted';
  }, 2000);
});
