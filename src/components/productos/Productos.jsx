import producto1 from '../../assets/productos/producto1.png';
import producto2 from '../../assets/productos/producto2.png';

export const Productos = () => {
    return (
        <div className='productos-container'>
            <div className="title-productos">
                <h3>Nuestros productos</h3>

            </div>

            <div className='productos'>

                <div className='producto'>
                    <img src={producto1} alt="producto" width={100}/>
                    <div className='text-producto'>
                        <h4>HIGH SHEEN</h4>
                        <p>Pomada de alto brillo en base agua.<span></span></p>
                    </div>
                </div>
                
                <div className='producto'>
                    <img src={producto2} alt="producto" width={100}/>
                    <div className='text-producto'>
                        <h4>HIGH SHEEN</h4>
                        <p>Pomada de alto brillo en base agua.<span></span></p>
                    </div>
                </div>

                <div className='producto'>
                    <img src={producto1} alt="producto" width={100}/>
                    <div className='text-producto'>
                        <h4>HIGH SHEEN</h4>
                        <p>Pomada de alto brillo en base agua.<span></span></p>
                    </div>
                </div>

                <div className='producto'>
                    <img src={producto2} alt="producto" width={100}/>
                    <div className='text-producto'>
                        <h4>HIGH SHEEN</h4>
                        <p>Pomada de alto brillo en base agua.<span></span></p>
                    </div>
                </div>


            </div>

        </div>
    )
}
