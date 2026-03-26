const revealButtons = document.querySelectorAll('.reveal-btn');

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
