const searchInput = document.getElementById('searchInput');
const chips = [...document.querySelectorAll('.chip')];
const cards = [...document.querySelectorAll('.anime-card')];

const filterCards = (type) => {
  cards.forEach((card) => {
    const matches = type === 'all' || card.dataset.category === type;
    card.classList.toggle('hidden', !matches);
  });
};

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((item) => item.classList.toggle('active', item === chip));
    filterCards(chip.dataset.filter);
  });
});

searchInput.addEventListener('input', (event) => {
  const query = event.target.value.trim().toLowerCase();

  cards.forEach((card) => {
    const title = card.querySelector('h4')?.textContent.toLowerCase() || '';
    const visible = title.includes(query) || query === '';
    card.classList.toggle('hidden', !visible);
  });
});
