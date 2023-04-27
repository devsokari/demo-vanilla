const menuBtn = document.querySelector('#menu-spinner');
const menuBar = document.querySelector('.topnav');

menuBtn.addEventListener('click', () => {
    if (menuBar.style.display == '' || menuBar.style.display == 'none')  
        menuBar.style.display= 'flex';
    else menuBar.style.display = 'none';
}, false)