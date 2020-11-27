import React, {useEffect} from 'react';
import "./CarouselCard.scss";
import "react-responsive-carousel/lib/styles/carousel.css";
import { CarouselMaterial } from './CarouselMaterial'
import CarouselCardCo from './CarouselCardCo';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsActions } from '../../../actions';


function CarouselCards () {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.weeksDealproducts);

    useEffect(() => {
        dispatch(ProductsActions.getProductsWeeksDeal('Weeks Deal'));
    }, [dispatch]);

    return (
        <>
                <h1 className='text-center _title_carousel'>WEEK'S DEALS</h1>
                <CarouselMaterial
                    className="container mx-auto"
                    index={0}
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
