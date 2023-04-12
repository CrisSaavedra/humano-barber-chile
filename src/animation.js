export const addEventeScrollToNavbar = () => {
    let navbar = document.getElementById('navbar');


    window.addEventListener("scroll", (e) => {
        let scroll = window.scrollY;
        if (scroll > 10) {
            navbar.style.position = 'fixed';
            navbar.style.backgroundColor = 'var(--black)';

        }
        if (scroll < 10) {
            navbar.style.position = 'relative';
            navbar.style.backgroundColor = 'transparent';

        }

    })
}