import React, {useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import CarouselCardCo from './CarouselCardCo';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsActions } from '../../../actions';

function CarouselCards () {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.weeksDealproducts);
    console.log('WEEKS DEAL',products);

    useEffect(() => {
        dispatch(ProductsActions.getProductsWeeksDeal('Weeks Deal'));
    }, [dispatch]);

    return (
        <div>
                <h1 className='text-center my-5'>WEEK'S DEALS</h1>
                <Carousel>
                    {
                        (products !== undefined) &&
                            products.map((item,index) =>
                            <CarouselCardCo
                                key={index}
                                {...item}
                            />)
                    }
                </Carousel>
        </div>
    )
}

export default CarouselCards
