
import gal1 from '../../assets/galeria/galeria.jpg';
import gal2 from '../../assets/galeria/galeria2.jpg';
import gal3 from '../../assets/galeria/galeria3.jpg';
import gal4 from '../../assets/galeria/galeria4.jpg';
import gal5 from '../../assets/galeria/galeria5.jpg';




export const Galeria = () => {

    return (
        <div className='galeria-container'>
            <div className='row'>
                <div className="column">
                    <a href={gal1}><div className='img'></div></a>
                    <a href={gal1}> <div className='img'></div></a>
                    <a href={gal2}> <div className='img'></div></a>
                </div>
                <div className="column">
                    <a href={gal2}> <div className='img'></div></a>
                    <a href={gal3}> <div className='img'></div></a>
                    <a href={gal5}> <div className='img'></div></a>
                </div>
                <div className="column">
                    <a href={gal4}> <div className='img'></div></a>
                    <a href={gal5}> <div className='img'></div></a>
                    <a href={gal1}> <div className='img'></div></a>
                </div>
                <div className="column">
                    <a href={gal2}> <div className='img'></div></a>
                    <a href={gal3}> <div className='img'></div></a>
                    <a href={gal5}> <div className='img'></div></a>
                </div>
            </div>
        </div>

    )
}




