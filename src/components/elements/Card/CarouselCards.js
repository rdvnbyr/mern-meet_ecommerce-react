
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import CarouselCardCo from './CarouselCardCo'
import { weekProductData } from '../../../data';

function CarouselCards () {
    // const {image, title, details, price} = props
    return (
        <div>
                <h1 className='text-center my-5'>WEEK'S DEALS</h1>
                <Carousel>
                    {weekProductData.cards.map((item,index) =>
                        <CarouselCardCo
                        key={index}
                        {...item}
                        />
                    )}
                </Carousel>
        </div>
    )
}

export default CarouselCards
