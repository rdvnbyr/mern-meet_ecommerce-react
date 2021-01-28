import React from 'react';
// import { useSelector, shallowEqual} from 'react-redux'
import { Card } from 'react-bootstrap';
import {ReactRatingStars} from '../../elements';
import moment from 'moment';
import './_product-review.scss';



export function ProductReview({
    reviews
}) {
    return (
        <div className="container product-review-contain">
            {
                reviews ?
                    reviews.map( (review, index) => {
                        return(
                                <Card key={review._id} className="my-4 mx-auto product-review-card">
                                    <div className="row justify-content-between pt-3 px-5">
                                        <div className="column text-left">
                                            <div className="">
                                                {review.reviewer.username}
                                            </div>
                                            <div className="reviewer-email">
                                                <small>{review.reviewer.email}</small>
                                            </div>
                                            <div>    
                                                <ReactRatingStars
                                                    count={review.rating}
                                                    value={review.rating}
                                                    edit={false}
                                                />
                                            </div>
                                        </div>
                                        <div className="column justify-content-center">
                                            <div className=" font-italic review-date">{moment(review.updatedAt, "YYYYY-MM-DDT00:00:00.000Z").format('DD-MM-YYYY')}</div>
                                        </div>
                                    </div>
                                    <Card.Body className="pl-5">
                                        <Card.Title className="font-weight-bold text-left">
                                            {review.title}
                                        </Card.Title>
                                        <Card.Title className="text-left">
                                            {review.comment}
                                        </Card.Title>
                                    </Card.Body>
                                    {/*

                                        <Card.Footer className="border-0 product-review-footer row justify-content-end">
                                            <div className="mr-5">Was this review helpful?</div>
                                            <div className="mr-4">
                                                <i 
                                                    className="fas fa-thumbs-up"
                                                    onClick={''}
                                                ><span className="ml-1">2</span>
                                                </i>
                                            </div>
                                            <div className="">
                                                <i className="fas fa-thumbs-down"><span className="ml-1">2</span></i>
                                            </div>
                                        </Card.Footer>
                                    */}
                                </Card>
                        )
                    })
                    :
                   <div>
                    There is no old purchased cart..., Please shop
                   </div>
            }
        </div>
    )
};



