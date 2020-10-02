import React, { Component } from 'react'
import {productData} from '../../data'
import {ProductConsumer} from '../../context'
import ProductCards from '../elements/Card/ProductCards'

export class Shopping extends Component {
    state = {
        products : productData.cards
    }
    render() {
        // console.log(this.state.products )
        return (
            <React.Fragment>
                <div style={{margin: '120px', minHeight: '100vh'}}>
                    <div className="py-5">
                        <div className="container">
                            <h1 className="text-center text-title"> OUR PRODUCTS</h1>
                            <div className="row">
                                <ProductConsumer>
                                    { value =>{
                                            return <ProductCards 
                                                        key={value.id} 
                                                        product={value}  
                                                    />
                                    } }
                                </ProductConsumer>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Shopping
