import { useEffect } from 'react';
import logo from '../../../assets/LOGO.webp';
import burger from '../../../assets/inicio/burgerbtn3.svg';
import xbtn from '../../../assets/inicio/xbtn2.svg';


export const NavBar = () => {


    const clickBurger = () => {
        let burger = document.getElementById('burger');
        burger.classList.add('close-burger');
    }

    const clickClose = () => {
        let options = document.getElementById('options');
        options.classList.add('close-options');
    }

    const animationsBurger = () => {
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


    const animationOptions = () => {
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



    useEffect(() => {
        animationsBurger();
        animationOptions();
    }, []);

    return (
        <div className="navbar-container">

            <img src={logo} alt="" width={80} />
            <div className="opciones-container">

                <a href="#" onClick={e => clickBurger()}  ><img id='burger' src={burger} alt="burger btn" width={50} /></a>

                <div id='options' className='options d-none'>

                    <a href="#" onClick={e => clickClose()}><img src={xbtn} alt="x btn" width={45} id='xbtn' className='d-none' /></a>

                    <div id='option' className='option'>
                        <a href="#" className='d-none'>opcione</a>
                        <a href="#" className='d-none'>opcione2</a>
                        <a href="#" className='d-none'>opcione3</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
