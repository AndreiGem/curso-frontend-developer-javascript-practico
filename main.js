const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCart);


function toggleDesktopMenu() {
  const isShoppingCartClosed = shoppingCart.classList.contains('inactive');
  if (!isShoppingCartClosed) {
    shoppingCart.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isShoppingCartClosed = shoppingCart.classList.contains('inactive');
  if (!isShoppingCartClosed) {
    shoppingCart.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if (!isMobileMenuClosed || !isDesktopMenuClosed) {
    mobileMenu.classList.add('inactive') || desktopMenu.classList.add('inactive');
  }
  shoppingCart.classList.toggle('inactive');
}
