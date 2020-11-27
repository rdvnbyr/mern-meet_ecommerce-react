import React, { useEffect } from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import { ProductsActions, UserActions } from '../../actions';
import '../../styles/Shopping.scss';
import { ReactLoadingSpinnerBubbles } from '../elements';
import CardCo from '../elements/Card/CardCo';


const Shopping = () => {

    const dispatch = useDispatch();

    const {products, userId, isLogin, isLoading} = useSelector(
        (state) => ({
            products: state.products.products.data,
            userId: state.session.access.userId,
            isLogin: state.session.isLogin,
            isLoading: state.products.loading
        }),
        shallowEqual
    );

    useEffect(() => {
        dispatch(ProductsActions.getProducts());
    }, [dispatch]);

    React.useEffect(() => {
        isLogin &&
        dispatch(UserActions.getUserWishlist(userId));
    }, [userId, dispatch, isLogin]);


    return (
        <div className="py-5" style={{margin: '120px', minHeight: '100vh'}}>
            <h1 className="text-center text-title"> OUR PRODUCTS</h1>
            <div className="row container mx-auto">
                {
                    isLoading ? 
                        <ReactLoadingSpinnerBubbles /> 
                    :
                        (products !== undefined) &&
                            products.map( (product, index) => {
                                return(
                                    <CardCo 
                                        key={product._id}
                                        {...product}
                                />
                                )
                            })
                }
            </div>
        </div>
    )
}
export default Shopping;
