import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { ProductsActions, UserActions } from '../../actions';
import '../../styles/Shopping.scss';
import CardCo from '../elements/Card/CardCo';


const Shopping = () => {

    // const [reRender, setReRender] = useState(false);
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products.data);
    const {userId} = useSelector(state => state.session.access);

    useEffect(() => {
        dispatch(ProductsActions.getProducts());
    }, [dispatch]);

    React.useEffect(() => {
        dispatch(UserActions.getUserWishlist(userId));
    }, [userId, dispatch]);


        return (
            <div className="py-5" style={{margin: '120px', minHeight: '100vh'}}>
                <h1 className="text-center text-title"> OUR PRODUCTS</h1>
                <div className="row container mx-auto">
                    {
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
