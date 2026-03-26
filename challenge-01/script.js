const revealButtons = document.querySelectorAll('.reveal-btn');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');

revealButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');

    card.classList.toggle('hidden');

    if (card.classList.contains('hidden')) {
      button.textContent = 'Reveal Spoiler';
    } else {
      button.textContent = 'Hide Spoiler';
    }
  });
});

if (savedTheme === 'light') {
  body.classList.add('light');
}

const updateThemeButton = () => {
  const isLight = body.classList.contains('light');

  if (isLight) {
    themeToggle.textContent = '☀️';
    themeToggle.setAttribute('aria-pressed', 'true');
  } else {
    themeToggle.textContent = '🌙';
    themeToggle.setAttribute('aria-pressed', 'false');
  }
};

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');

  if (body.classList.contains('light')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  
  updateThemeButton();
});

updateThemeButton();
