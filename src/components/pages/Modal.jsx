import React, { Component } from 'react'
import styled from 'styled-components';
import { ProductConsumer } from "../../context";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';


class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                { value => {
                    const {modalOpen, closeModal} = value;
                    const {image, title, price} = value.modalProduct;

                    if (!modalOpen) {
                       return  null
                    }else {
                        return (
                            <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-9 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5 ">
                                        <h5 className="my-3"> Product added to cart </h5>
                                        <img src={image} className="img-fluid" alt="product modal" />
                                        <h5 className="my-2">{title} </h5>
                                        <h5 className="text-muted"> 
                                            {price}
                                            <span className ="mr-1"> € </span> 
                                        </h5> 
                                        
                                        <Link to ="/shopping">
                                            <Button
                                                className="my-3"
                                                type="submit"
                                                variant="contained"
                                                color="dark" 
                                                onClick={() => closeModal() }    
                                            >
                                                Continue Shopping
                                            </Button>
                                        </Link>
                                        <Link to ="/cart">
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="dark" 
                                                onClick={() => closeModal() }    
                                            >
                                                Go to Cart
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        )
                    }
                    
                }}
            </ProductConsumer>
        )
    }
}

export default Modal


const ModalContainer = styled.div `
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    #modal{
    background: whitesmoke
    }
`;