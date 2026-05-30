(function () {
  const cards = Array.from(document.querySelectorAll('.project-card'));
  const bar = document.querySelector('.filter-bar');
  if (!bar || !cards.length) return;

  const tagSet = new Set();
  cards.forEach(card => {
    card.querySelectorAll('.tag').forEach(t => tagSet.add(t.textContent.trim()));
  });

  const tags = ['Todos', ...Array.from(tagSet).sort()];

  tags.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (tag === 'Todos' ? ' active' : '');
    btn.textContent = tag;
    btn.addEventListener('click', () => {
      bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cards.forEach(card => {
        if (tag === 'Todos') {
          card.style.display = '';
        } else {
          const cardTags = Array.from(card.querySelectorAll('.tag')).map(t => t.textContent.trim());
          card.style.display = cardTags.includes(tag) ? '' : 'none';
        }
      });
    });
    bar.appendChild(btn);
  });
})();
