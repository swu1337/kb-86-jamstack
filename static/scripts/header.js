window.onload = () => {
  let header = document.querySelector('.header');
  if (!header) return;
  console.log('rerer');
  document.body.onscroll = () => {
    console.log(document.body.scrollTop);
    console.log(window.scrollY);
    if(window.scrollY > 0) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }
};