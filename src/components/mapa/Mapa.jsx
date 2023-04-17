

export const Mapa = () => {
    return (


        <div id="mapa" className="mapa-container">
            <div className="text">
                <svg width={50} enableBackground="new 0 0 64 64" version="1.1" viewBox="0 0 64 64"  ><g id="Glyph_copy_2"><path d="M42.138,23.162c0-5.566-4.548-10.094-10.138-10.094s-10.138,4.528-10.138,10.094S26.41,33.256,32,33.256   S42.138,28.728,42.138,23.162z" /><path d="M31.995,63.996l4.109-5.375c4.289-5.678,18.282-25.024,18.282-35.601C54.387,9.253,45.391,0.004,32,0.004   S9.613,9.253,9.613,23.021c0,11.39,16.432,33.166,18.301,35.605L31.995,63.996z M17.862,23.162c0-7.771,6.342-14.094,14.138-14.094   s14.138,6.323,14.138,14.094S39.796,37.256,32,37.256S17.862,30.934,17.862,23.162z" /></g></svg>

                <div className="title-mapa">
                    <h3>¡  No te pierdas !</h3>
                </div>


                <a href="https://goo.gl/maps/h4KSe1FSJTDmYf7L8" target='_blank'>3 Norte 329, Viña del mar</a>

            </div>

            <div className="mapa">
                <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.3933190555344!2d-71.55836682356488!3d-33.019766775586795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689dd9cbea321f1%3A0x4384279d3e5e0bdc!2sHumanoBarberChile!5e0!3m2!1ses!2scl!4v1681748982597!5m2!1ses!2scl" width="330" height="350" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
