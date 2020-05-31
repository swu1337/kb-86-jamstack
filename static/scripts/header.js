document.body.onscroll = () => {
  let header = document.querySelector('.header');
  if(window.scrollY > 0) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
}