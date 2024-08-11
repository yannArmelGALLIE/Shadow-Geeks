const activePage = window.location.pathname;
const navLinks1 = document.querySelectorAll('header a');
const btn_shop = document.querySelector('.btn_shop')

navLinks1.forEach(link => {
    if(link.href.includes(`${activePage}`)) {
        link.classList.add('active')
    }
})

btn_shop.addEventListener('click', () => {
    window.location.href= 'shop.html';
})
 

