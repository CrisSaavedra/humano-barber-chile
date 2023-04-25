export const addEventeScrollToNavbar = () => {
    let navbar = document.getElementById('navbar');


    window.addEventListener("scroll", (e) => {
        let scroll = window.scrollY;
        if (scroll > 80) {
            navbar.style.position = 'fixed';
            navbar.style.backgroundColor = 'var(--black)';
            navbar.style.opacity = '0.9';

        }
        if (scroll < 80) {
            navbar.style.position = 'relative';
            navbar.style.backgroundColor = 'transparent';
            navbar.style.opacity = '1';

        }

    })
}