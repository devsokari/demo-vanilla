const menuBtn = document.querySelector('#menu-spinner');
const menuBar = document.querySelector('.topnav');

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
    }  
    else menuBar.style.display = 'none';
}, false)