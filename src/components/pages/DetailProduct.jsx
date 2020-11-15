import React, { useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Button} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import { ProductsActions, CartActions } from '../../actions';
import { useAlert } from 'react-alert';
import { Review } from '../layout/ProductDetails/Review';
import '../../styles/productDetails.scss';
import { ReactLoadingSpinnerBubbles } from '../elements/ReactLoading/ReactLoading';



const DetailProduct = () => {
    const alert = useAlert();
    const _id = useLocation().pathname.split('/')[2];
    const domain = 'http://localhost:8080/';

    const dispatch = useDispatch();
    const { product, loading } = useSelector(state => state.products);
    const {isLogin} = useSelector(state => state.session);
    const {token, userId} = useSelector(state => state.session.access);

    useEffect(() => {
        dispatch(ProductsActions.getProductDetails(_id));
    }, [_id, dispatch]);

    const addproductToCart = (productId) => {
        !isLogin ?
        alert.show(<div className="text-info text-lowercase text-capitalize">Please login before shopping</div>)
      :
        dispatch(CartActions.addProductToCartAction(token, productId, userId));
    }

    return(
        <div className="container py-5 _product-details-contain">
        {
            loading ? <div className="mx-auto my-auto"><ReactLoadingSpinnerBubbles /></div>
             :
             <div className="row">
                 <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                     <img src={domain + product.image} className="img-fluid" alt="product"/>
                 </div>      
                 <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                     <h2> {product.title} </h2>
                     <h4 className="text-title text-uppercase text-muted mt-3 mb-2"> {'' } </h4>
                     <h4><strong> Price: {product.price}
                                 <span className ="mr-1"> € </span> 
                         </strong> 
                     </h4>
                     <p className=" mt-3 mb-0 text-muted lead"> {product.details} </p>
                     <div>
                         <Link to="/shopping" className="text-decoration-none">
                             <Button
                                 className="mx-auto my-5"
                                 type="submit"
                                 variant="contained"
                                 color="default"     
                             >
                                 Back to Products
                             </Button>
                         </Link>
                         <Button
                            className="ml-5 my-5"
                            type="submit"
                            variant="contained"
                            color="default"
                            onClick={() => addproductToCart(product._id) }
                         >
                         Add Product
                         </Button>
                     </div>
                 </div>
             </div>
        }
        <div className="mx-auto text-center my-5">
            <h4>Product Reviews</h4>
            <Review reviews={product.reviews}/>
        </div>
                
        </div>
    )
};

export default DetailProduct;