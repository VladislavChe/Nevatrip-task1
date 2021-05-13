const showMoreBtn = document.querySelector('.card__time-btn-show-more'),
  btns = document.querySelectorAll('.card__time-btn');

// Show more time btns
showMoreBtn.addEventListener('click', function (e) {
  e.preventDefault();
  btns.forEach((btn) => {
    if (!btn.classList.contains('show')) {
      btn.classList.add('show');
      showMoreBtn.style.display = 'none';
    }
  });
});
