import logo from '../../../assets/LOGO.webp';
import burger from '../../../assets/inicio/burgerBtn2.svg';

export const NavBar = () => {


    const clickNav = () =>{
        let opcion = document.getElementById('opcion');

        if( opcion.style.display === 'none'){
            opcion.style.display = 'flex';
        }else{
            opcion.style.display = 'none';
        }

    }

    return (
        <div className="navbar-container">
            <img src={logo} alt="" width={80} />
            <div className="opciones-container">

                <a id='burger' href="#" onClick={e => clickNav()}><img src={burger} alt="burger btn" width={50}/></a>
                <div id='opcion' className='opcion'>
                    <a href="#" >opcione</a>
                    <a href="#">opcione2</a>
                </div>
            </div>
        </div>
    )
}
