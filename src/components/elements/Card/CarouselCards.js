import React, {useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import { CarouselMaterial } from './CarouselMaterial'
import CarouselCardCo from './CarouselCardCo';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsActions } from '../../../actions';
import Button from '@material-ui/core/Button';

function CarouselCards () {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.weeksDealproducts);
    console.log('WEEKS DEAL',products);

    useEffect(() => {
        dispatch(ProductsActions.getProductsWeeksDeal('Weeks Deal'));
    }, [dispatch]);

    return (
        <>
                <h1 className='text-center my-5'>WEEK'S DEALS</h1>
                <CarouselMaterial
                    className="container mx-auto"
                    index={1}
                    autoPlay={false}
                >
                {
                    (products !== undefined) &&
                        products.map((item,index) =>
                            <CarouselCardCo
                                key={index}
                                {...item}
                            />
                        )
                }
                </CarouselMaterial>
        </>
    )
}

export default CarouselCards;
