window.onload = () => {
  let header = document.querySelector('.header');
  if(!header) return;
  let window = document.window;

  window.onscroll = () => {
    console.log(window.scrollTop);
  }
};