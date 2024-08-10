const activePage = window.location.pathname;
const navLinks1 = document.querySelectorAll('header a');
const btn = document.querySelector('.btn')

navLinks1.forEach(link => {
    if(link.href.includes(`${activePage}`)) {
        link.classList.add('active')
    }
})

btn.addEventListener('click', () => {
    window.location.href= 'shop.html';
})
 

