import React from 'react'
import { PaginaInicio } from './components/paginaInicio/PaginaInicio'
import { Nosotros } from './components/nosotros/Nosotros'
import { Horario } from './components/horario/Horario'
import { useEffect } from 'react'
import { addEventeScrollToNavbar } from './animation'
import { Footer } from './components/footer/Footer'
import { Mapa } from './components/mapa/Mapa'
import { Galeria } from './components/galeria/Galeria'



export const HumanoBarberChile = () => {


    useEffect(() => {
        addEventeScrollToNavbar();
    }, []);


    return (
        <div className='humano-container'>
            <div className="background-img"></div>
            <PaginaInicio />
            <Nosotros />
            <Galeria />
            <Mapa />
            <Horario />
            <Footer />

        </div>
    )
}
