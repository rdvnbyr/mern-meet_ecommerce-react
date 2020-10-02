import React from 'react';
import Card from '../elements/Card/Cards';
import CaruoselCards from '../elements/Card/CarouselCards';

function Home() {
    return (
        <div style={{minHeight:"100vh", marginTop:"120px"}}>
            <CaruoselCards/>
            <Card />
        </div>
    )
}

export default Home
