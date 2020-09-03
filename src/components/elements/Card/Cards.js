import React, { Component } from 'react'
import CardCo from './CardCo';
import { saleProductData } from '../../../data';
import { CardGroup } from 'react-bootstrap';
import './Card.scss'


class Cards extends Component {
    constructor(props) {
        super(props)
        this.state = {
             category:[]
        }
    }
    

    render() {
        return (
            <div className="container mt-3">
                <h1 className='text-center my-5'>BEST SELLERS</h1>
               <div>                    
                    {
                        this.state.category.length ===0 ?
                        (
                            <CardGroup>
                            {saleProductData.cards.map((item,index) =>
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

export default Cards
