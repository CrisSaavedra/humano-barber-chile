
export const clickBurger = (e) => {
    e.preventDefault();
    let burger = document.getElementById('burger');
    burger.classList.add('close-burger');
}

export const clickClose = (e) => {
    e.preventDefault();
    let options = document.getElementById('options');
    options.classList.add('close-options');
}

export const animationsBurger = () => {
    let burger = document.getElementById('burger');
    let options = document.getElementById('options');
    let xbtns = document.getElementById('xbtn');
    burger.addEventListener('animationend', (e) => {
        if (e.animationName === 'close-burger') {
            options.classList.remove('d-none');
            options.classList.add('open-options');
            burger.classList.add('d-none');
        } else {
            if (e.animationName === 'open-burger') {
                burger.classList.remove('open-burger');
                options.classList.add('d-none');
                options.classList.remove('open-options');
                options.classList.remove('close-options');
                xbtns.classList.remove('options-in');
                xbtns.classList.add('d-none');
            }
        }

    })
}


export const animationOptions = () => {
    let burger = document.getElementById('burger');
    let options = document.getElementById('options');
    let option = document.getElementById('option');
    let xbtns = document.getElementById('xbtn');
    options.addEventListener('animationend', (e) => {
        if (e.animationName === 'open-options') {
            xbtns.classList.remove('d-none');
            xbtns.classList.add('options-in');
            burger.classList.remove('close-burger');

            for (let child of option.children) {
                child.classList.remove('d-none');
                child.classList.add('options-in');
            }

        } else {
            if (e.animationName === 'close-options') {

                xbtns.classList.remove('options-in');

                burger.classList.remove('d-none');
                burger.classList.add('open-burger');
                for (let child of option.children) {
                    child.classList.add('d-none');
                    child.classList.remove('options-in');
                }
            }
        }


    })
}






