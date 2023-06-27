const btnScrollToTop = document.querySelector('#btnScrollToTop');

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 500) {
    btnScrollToTop.style.display = 'block';
  } else {
    btnScrollToTop.style.display = 'none';
  }
});

btnScrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

