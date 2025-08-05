function showList(id) {
  const lists = ['phone-list', 'tablet-list'];
  lists.forEach(listId => {
    document.getElementById(listId).style.display = (listId === id) ? 'block' : 'none';
  });

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => card.classList.remove('active'));

  if (id === 'phone-list') {
    cards[0].classList.add('active');
  } else if (id === 'tablet-list') {
    cards[1].classList.add('active');
  }
}

function bookRepair(model) {
  const url = `https://wa.me/254758585053?text=Hello%2C%20I%20would%20like%20to%20book%20a%20repair%20for%20${encodeURIComponent(model)}.`;
  window.open(url, '_blank');
}

function filterList(inputId, listId) {
  const input = document.getElementById(inputId);
  const filter = input.value.toLowerCase();
  const list = document.querySelector(`#${listId} ul`).getElementsByTagName('li');
  Array.from(list).forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? '' : 'none';
  });
}

window.onload = () => {
  new Swiper('.swiper', {
    loop: true,
    autoplay: { delay: 4000 },
    pagination: { el: '.swiper-pagination', clickable: true },
  });

  // Show default repair list
  showList('phone-list');
};
