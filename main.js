let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

let expandMenu = () =>{

  mobileNav.classList.toggle('show-mobile-nav');
  toggleButton.classList.toggle('toggle-button__clicked');
}


toggleButton.addEventListener('click', expandMenu);