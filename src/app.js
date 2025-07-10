const menu = document.getElementById('menu');
const BtnMenu = document.getElementById('menu-button');

BtnMenu.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});
