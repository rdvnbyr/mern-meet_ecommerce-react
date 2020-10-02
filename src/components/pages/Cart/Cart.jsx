import React,{Component} from 'react'
import CartColumns from './CartColumns'
import {ProductConsumer} from '../../../context'
import CartList from './CartList'
import CartTotals from './CartTotals'

class Cart extends Component{
    render ( ) {
        return (
            <div style={{margin: '120px', minHeight: '100vh'}}>
                <ProductConsumer>
                    { value => {
                        const {cart} = value;
                        if (cart.length > 0 ){
                            return (
                                <React.Fragment>
                                    <h2 className="text-center text-title my-5"> Your Cart</h2>
                                    <CartColumns />
                                    <CartList value = {value}/>
                                    <CartTotals value= {value} history={this.props.history} />
                                </React.Fragment>
                            )
                        }else{
                            return (
                                <h2 className="text-center text-title my-5">    Your Cart is Empty
                                </h2>
                            )
                        }
                    }}
                </ProductConsumer>
            </div>
        )
    }
    
}

export default Cart
