
window.document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger'),
          hamburgerMenu = document.querySelector('.menu'),
          menuItem = document.querySelectorAll('.menu_item');



    hamburger.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('menu_active');
        hamburger.classList.toggle('hamburger_active');
    });
    
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('menu_active');
            hamburger.classList.toggle('hamburger_active');   
        });
    });
});


