//select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
// const projectItems = document.querySelectorAll('.item');
// //console.log(projectItems);



//set Initial State of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu () {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}

// projectItems.forEach(item =>  {     
//     const currentLink = item.childNodes[1].childNodes[1];
//     const currentImage = currentLink.childNodes[1];
//     currentImage.addEventListener("mouseenter", function() {
//         currentImage.classList.add('nowDescribe');
//         setTimeout(function(){ currentImage.classList.remove('nowDescribe'); }, 6000);        
//     });    
// });

