export const addEventWhenScroll = () => {
    let navbar = document.getElementById('navbar');


    window.addEventListener("scroll", (e) => {
        let scroll = window.scrollY;

        //-----------navbar----------
        if (scroll > 1) {
            navbar.style.position = 'fixed';
            navbar.style.backgroundColor = 'var(--black)';
            navbar.style.opacity = '0.9';
            navbar.classList.add('on-fixed');
            navbar.classList.remove('initial-state');
        }
        if (scroll < 5) {
            navbar.classList.add('initial-state');
            navbar.classList.remove('on-fixed');
        }

        //----------nosotros-------------

        if (scroll > 300) {
            nosotrosAnimations();
        }

        //---galeria

        if (scroll > 1000) {
            algoDeNosotros();
        }

        //------Productos-------

        if (scroll > 1500) {
            productosAnimations();
        }

        //----mapa-----
        if (scroll > 2500) {
            mapaAnimations();
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


const nosotrosAnimations = () => { //maybe only text
    let element = document.getElementById('nosotros');
    element.style.animation = 'opacityChange .8s ease-out forwards'
}

const algoDeNosotros = () => {
    let element = document.getElementById('galeria');
    element.style.animation = 'fromLeft 1s ease-out forwards';
}

const productosAnimations = () => {
    let element = document.getElementById('productos');
    element.style.animation = 'fromRight 1s ease-out forwards';
}


const mapaAnimations = () => {
    let element = document.getElementById('mapa');
    element.style.animation = 'fromLeft 1s ease-out forwards';
}