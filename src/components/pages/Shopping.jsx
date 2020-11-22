import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { ProductsActions, UserActions } from '../../actions';
import '../../styles/Shopping.scss';
import { ReactLoadingSpinnerBubbles } from '../elements';
import CardCo from '../elements/Card/CardCo';


const Shopping = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products.data);
    const {userId} = useSelector(state => state.session.access);
    const {isLogin} = useSelector(state => state.session);
    const {isLoading} = useSelector(state => state.products.loading);

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
