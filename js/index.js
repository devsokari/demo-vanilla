const menuBtn = document.querySelector('#menu-spinner');
const menuBar = document.querySelector('.topnav');
const menuBtnOn = document.querySelector('#menu-spinner-on');

console.log(menuBtnOn);

menuBtn.addEventListener('click', () => {
    if (menuBar.style.display == '' || menuBar.style.display == 'none')
    {
        menuBar.style.display= 'flex';
        menuBar.animate([
            {transform: "translateX(100px)"},
            {transform: "translateX(0px)"},
        ],
        {
            duration: 200,
            iterations: 1,
            easing: 'ease-out',
        });
        menuBar.style.display == 'none';
        menuBtnOn.style.display = 'block';
    }  
    else {
        menuBar.style.display = 'none';
        menuBtnOn.style.display = 'none';
    }
}, false);

menuBtnOn.addEventListener('click', () => {
    menuBar.style.display = 'none';
    menuBtnOn.style.display = 'none';
    menuBar.style.display == 'block';
}, false);