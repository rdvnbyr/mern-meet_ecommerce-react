import React from 'react';
import Card from '../elements/Card/Cards';
import CaruoselCards from '../elements/Card/CarouselCards';

function Home() {
    return (
        <div style={{marginTop: '100px'}}>
            <CaruoselCards/>
            <Card />
        </div>
    )
}

export default Home
