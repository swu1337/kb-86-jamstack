window.onload = () => {
  let header = document.querySelector('.header');
  if (!header) return;
  
  document.body.onscroll = () => {
    if(window.scrollY > 0) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }
};