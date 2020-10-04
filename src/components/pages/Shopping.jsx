import React, { useEffect } from 'react'
import ProductCards from '../elements/Card/ProductCards';
import {useDispatch, useSelector} from 'react-redux';
import { ProductsActions } from '../../actions';


const Shopping = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products.data);

    useEffect(() => {
        dispatch(ProductsActions.getProducts());
    }, [dispatch]);


        return (
            <React.Fragment>
                <div style={{margin: '120px', minHeight: '100vh'}}>
                    <div className="py-5">
                        <div className="container">
                            <h1 className="text-center text-title"> OUR PRODUCTS</h1>
                            <div className="row">
                                {
                                    (products !== undefined) &&
                                        products.map( (product, index) => {
                                            return(
                                                <ProductCards 
                                                    key={product._id}
                                                    {...product}
                                            />
                                            )
                                        })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
}
export default Shopping;
