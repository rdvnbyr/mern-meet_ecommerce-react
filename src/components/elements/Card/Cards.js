import React, { useEffect } from 'react'
import CardCo from './CardCo';
import { CardGroup } from 'react-bootstrap';
import './Card.scss';
import {useDispatch, useSelector} from 'react-redux';
import { ProductsActions } from '../../../actions'


const Cards = () => {

    const dispatch = useDispatch();
    const {bestSellers} = useSelector(state => state.products);
    console.log('BEST SELLERS',bestSellers);

    useEffect(() => {
        dispatch(ProductsActions.getProductsBestSellers('Best Seller'));
    }, [dispatch]);

    return (
        <div className="container my-5">
            <h1 className='text-center my-5 _title_bestSellers'>BEST SELLERS</h1>
                <div className="py-5">
                        {
                            (bestSellers !== undefined && bestSellers.length > 0) ?
                            (
                                <CardGroup>
                                {bestSellers.map((item,index) =>
                                    <CardCo
                                        key={index}
                                        {...item}
                                    />
                                )}
                                </CardGroup>
                            ) : (
                                'No Best Sellers'
                            )
                        }
                </div>
        </div>
    )
}


export default Cards
