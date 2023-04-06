import { useEffect } from 'react';
import logo from '../../../assets/LOGO.webp';
import burger from '../../../assets/inicio/burgerbtn3.svg';
import xbtn from '../../../assets/inicio/xbtn2.svg';
import { animationOptions, animationsBurger, clickBurger, clickClose } from './animations';




export const NavBar = () => {

    useEffect(() => {
        animationsBurger();
        animationOptions();
    }, []);

    return (
        <div className="navbar-container">

            <img src={logo} alt="" width={80} />
            <div className="opciones-container">

                <a href="#" onClick={e => clickBurger()}>
                    <svg width={50} enableBackground="new 0 0 12 12" id="burger" version="1.1" viewBox="0 0 12 12"><g><rect fill="#cecece" height="1" width="11" x="0.5" y="5.5" /><rect fill="#cecece" height="1" width="11" x="0.5" y="2.5" /><rect fill="#cecece" height="1" width="11" x="0.5" y="8.5" /></g></svg>
                </a>


                {/* <img id='burger' src={burger} alt="burger btn" width={50} /> */}
                <div id='options' className='options d-none'>

                    <a href="#" onClick={e => clickClose()}>
                        <svg width={45} className="ci-primary d-none" id='xbtn' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <polygon fill="#cecece" points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313" />
                        </svg>
                    </a>

                    <div id='option' className='option'>
                        <a href="#" className='d-none'>Inicio</a>
                        <a href="#" className='d-none'>Nosotros</a>
                        <a href="#" className='d-none'>Productos</a>
                        <a href="#" className='d-none'>Direccion</a>
                        <a href="#" className='d-none'>Horario</a>
                        <a href="#" className='d-none'>Agendar</a>
                    </div>
                </div>
            </div>
        </div >
    )
}
