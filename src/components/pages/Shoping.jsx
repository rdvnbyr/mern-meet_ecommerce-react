// import React, { Component } from 'react'
// import { productData } from '../../data'
// import CardComponent from '../elements/Card/CardComponent'
// import { CardGroup } from"react-bootstrap";

// export class Shoping extends Component {
//     constructor(props) {
//     super(props)
//     this.state = {
//          category:[]
//     }
// }
// render() {
//         return (
//             <div className='container mt-3'>
//                 <div className='text-center'>
//                     {

//                         productData.categories.map((item,index) => <h4 key={index}>{item.toUpperCase()} </h4> )
// }
                        
//                 </div>

//                 <div>
//                      {
//                          this.state.category.length === 0 ? (
//                         <CardGroup>
//                               {productData.cards.map (item => 
//                                      <CardComponent 
//                                         image={item.image}
//                                         title = {item.title}
//                                         price={item.price}
                                    
//                                     />  )}
//                          </CardGroup>
// ): (
//     'Array is empty'
// )
//                     }   
//                 </div>      
//             </div>
//         )
//     }
// }

// export default Shoping
