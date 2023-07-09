(function() {
  const burgerItem = document.querySelector('.burger__btn');
  const burgerItem2 = document.querySelector('.burger__btn');
  const menu = document.querySelector('.nav');
  const menuClose = document.querySelector('.nav-close');
  const menuCloseNav = document.querySelector('.nav');
  const menu2 = document.querySelector('.layout__btn');
  const bod = document.querySelector('body');
  
  
      burgerItem.addEventListener('click', () => {
      menu.classList.add('nav_active');
      bod.classList.add('lock');
  });
  menuClose.addEventListener('click', () => {
      menu.classList.remove('nav_active');
      bod.classList.remove('lock');
      menu2.classList.remove('layout__btn_active');
  });
  menuCloseNav.addEventListener('click', () => {
      menu.classList.remove('nav_active');
      menu2.classList.remove('layout__btn_active');
      bod.classList.remove('lock');
  });
  burgerItem2.addEventListener('click', () => {
      menu2.classList.add('layout__btn_active');
  });
  menu2.addEventListener('click', () => {
      menu.classList.remove('nav_active');
      menu2.classList.remove('layout__btn_active');
      bod.classList.remove('lock');
  });
}());