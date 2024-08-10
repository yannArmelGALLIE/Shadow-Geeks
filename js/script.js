const activePage = window.location.pathname;
const navLinks1 = document.querySelectorAll('header a');

navLinks1.forEach(link => {
    if(link.href.includes(`${activePage}`)) {
        link.classList.add('active')
    }
})
 

