import React from 'react'
import Banner from '../components/GeComerce/Banner'
import CardData from '../components/GeComerce/CardInfo'

const GeCommerce = () => {
    return (
        <div className='bg-black lg:h-[75.5vw] h-full pb-10 overflow-hidden'>
            <Banner />
            <CardData/>
        </div>
    )
}

export default GeCommerce