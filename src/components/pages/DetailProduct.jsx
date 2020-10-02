import React, { Component } from 'react';
import {ProductConsumer} from '../../context'
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class DetailProduct extends Component {
    render() {
        return (
            <ProductConsumer>
            {
                value => {
                  const {
                      id, 
                      category, 
                      image, 
                      details, 
                      price, 
                      title, 
                      inCart
                    } = value.detailProduct;
                  return (
                      <div className="container py-5" style={{margin: '120px', minHeight: '100vh'}}>
                            {/* product info */}
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <img src={image} className="img-fluid" alt="product"/>
                                    </div>
                            {/* product text */}        
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h2> {title} </h2>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2"> {category } </h4>
                                        <h4><strong> Price: {price}
                                                    <span className ="mr-1"> € </span> 
                                            </strong> 
                                        </h4>
                                        <p className=" mt-3 mb-0 text-muted lead"> {details} </p>
                            {/* buttons */}
                                        <div>
                                            <Link to="/shopping">
                                                <Button
                                                    className="mx-auto my-5"
                                                    type="submit"
                                                    variant="contained"
                                                    color="dark"     
                                                >
                                                    Back to Products
                                                </Button>
                                            </Link>
                                            <Button
                                                className="ml-5 my-5"
                                                type="submit"
                                                variant="contained" color="dark"
                                                disabled = {inCart ? true : false}
                                                onClick={() => {
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                } }
                                            >
                                                {inCart ? 'inCart': 'Add to Cart'}
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                      </div>
                  )
                }
            }
                
            
            </ProductConsumer>
            
        );
    }
}

export default DetailProduct;