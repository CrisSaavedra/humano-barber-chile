import React from 'react'
import { PaginaInicio } from './components/paginaInicio/PaginaInicio'
import { Nosotros } from './components/nosotros/Nosotros'

export const HumanoBarberChile = () => {
    return (
        <div className='humano-container'>
             <div className="background-img"></div>
            <PaginaInicio/>
            <Nosotros/>
        </div>
    )
}
