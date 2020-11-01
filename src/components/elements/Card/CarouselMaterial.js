import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'

export const  CarouselMaterial = ({
    children,
    autoPlay = true,
    indicators = true,
    animation="fade", //"fade" | "slide",
    timeout, //number | {appear? number, enter?: number, exit?: number}
    navButtonsAlwaysVisible = true,
    navButtonsAlwaysInvisible = false,
    fullHeightHover = true, //Defines if the the next/previous button wrappers will cover the full height of the Item element and show buttons on full height hover,
    index = 0, //number
    ...props
}) =>
{
    return (
        <Carousel
        autoPlay={autoPlay}
        indicators={indicators}
        animation={animation}
        timeout={timeout}
        navButtonsAlwaysVisible={navButtonsAlwaysVisible}
        navButtonsAlwaysInvisible={navButtonsAlwaysInvisible}
        fullHeightHover={fullHeightHover}
        index={index}
        {...props}
        >
        {children}
        </Carousel>
    )
}