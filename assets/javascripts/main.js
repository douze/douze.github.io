const menuItems = document.querySelectorAll('#sidebar li');

// Get vendor transition property
const docElemStyle = document.documentElement.style;
const transitionProp = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';

// Animate sidebar menu items
function animateMenuItems() {
  for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i];
    // Stagger transition with transitionDelay
    item.style[transitionProp + 'Delay'] = (i * 75) + 'ms';
    item.classList.toggle('is--moved');
  }
};

animateMenuItems(); 