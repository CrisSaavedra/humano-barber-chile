import React from 'react'
import { PaginaInicio } from './components/paginaInicio/PaginaInicio'
import { Nosotros } from './components/nosotros/Nosotros'
import { Horario } from './components/horario/Horario'
import { useEffect } from 'react'
import { addEventWhenScroll } from './animation'
import { Footer } from './components/footer/Footer'
import { Mapa } from './components/mapa/Mapa'
import { Galerias } from './components/galeria2/Galerias';
import { Productos } from './components/productos/Productos'


export const HumanoBarberChile = () => {


    useEffect(() => {
        addEventWhenScroll();
    }, []);
    

    return (
        <div className='humano-container'>
            <div className="background-img"></div>
            <PaginaInicio />
            <Nosotros />
            <Galerias />
            <Productos/>
            <Mapa />
            <Horario />
            <Footer />

        </div>
    )
}
