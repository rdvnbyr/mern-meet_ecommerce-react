import React from 'react';
import ReactLoading from 'react-loading';

export function ReactLoadingSpinnerBubbles({
    className,
    name="SpinningBubbles",
    type="bubbles",// { blank,balls, bars, bubbles, cubes, cylon, spin, spinningBubbles, spokes}
    color="#331231",
    delay,
    height,
    width
}) {
    return (
        <ReactLoading
            className={className}
            name={name}
            type={type}
            color={color}
            delay={delay}
            height={height}
            width={width}
        />
    )
}
