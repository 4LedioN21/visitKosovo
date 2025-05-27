
const menuIcon = document.querySelector('.Hamburger-Menu-Icon');
const dropdown = document.querySelector('.Hamburger-Dropdown');
const body = document.body;

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    dropdown.classList.toggle('active');
    body.classList.toggle('no-scroll');
});


const container = document.querySelector('.index-slider-section');
const cards = document.querySelectorAll('.index-slider-item');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      cards.forEach(c => {
        if (c !== card) {
          c.classList.add('dimmed');
        }
      });
    });

    card.addEventListener('mouseleave', () => {
      cards.forEach(c => c.classList.remove('dimmed'));
    });
});

