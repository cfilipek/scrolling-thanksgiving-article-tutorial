let navLinks = document.querySelectorAll('.smoothscroll');

window.addEventListener('scroll', () => {
  let fromTop = window.scrollY - 25;

  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop + 55 &&
      section.offsetTop + section.offsetHeight > fromTop + 55
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }

    link.onclick = e => {
      e.preventDefault();
      let elementPosition = section.offsetTop;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    };
  });
});
