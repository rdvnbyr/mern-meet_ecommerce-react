import React, { Component } from 'react'
import CardCo from './CardCo';
import {productData} from '../../../data'
import { CardGroup } from 'react-bootstrap';
import './Card.scss'

class ProductCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
             category:[]
        }
    }


    render() {
        return (
            <div className="container mt-3 mb-5">
                    <div>
                            {
                                this.state.category.length ===0 ?
                                (
                                    <CardGroup>
                                        {productData.cards.map((item,index) =>
                                            <CardCo
                                                key={index}
                                                {...item}
                                            />
                                        )}
                                    </CardGroup>
                                ) : (
                                    'Array is empty'
                                )
                            }
                    </div>
            </div>
        )
    }
}
export default ProductCards