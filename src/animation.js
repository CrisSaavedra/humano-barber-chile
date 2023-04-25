export const addEventWhenScroll = () => {
    let navbar = document.getElementById('navbar');


    window.addEventListener("scroll", (e) => {
        let scroll = window.scrollY;
        if (scroll > 500) {
            navbar.style.position = 'fixed';
            navbar.style.backgroundColor = 'var(--black)';
            navbar.style.opacity = '0.9';
            navbar.classList.add('on-fixed');
            navbar.classList.remove('initial-state');
        }
        if (scroll < 470) {
            navbar.classList.add('initial-state');
            navbar.classList.remove('on-fixed');
        }

    })

    navbar.addEventListener('animationend', (e) => {

        if (e.animationName === 'initialState') {
            navbar.style.position = 'relative';
            navbar.style.backgroundColor = 'transparent';
            navbar.style.opacity = '1';
        }
    })
}


