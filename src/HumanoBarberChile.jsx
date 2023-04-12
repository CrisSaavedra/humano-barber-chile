import React from 'react'
import { PaginaInicio } from './components/paginaInicio/PaginaInicio'
import { Nosotros } from './components/nosotros/Nosotros'
import { Horario } from './components/horario/Horario'
import { useEffect } from 'react'
import { addEventeScrollToNavbar } from './animation'

export const HumanoBarberChile = () => {


    useEffect(() => {
        addEventeScrollToNavbar();
    }, []);


    return (
        <div className='humano-container'>
            <div className="background-img"></div>
            <PaginaInicio />
            <Nosotros />
            <Horario />
        </div>
    )
}
