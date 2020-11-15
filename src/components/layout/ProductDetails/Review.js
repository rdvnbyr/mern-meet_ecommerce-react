import React from 'react';
import { useSelector, shallowEqual} from 'react-redux'
import { Card } from 'react-bootstrap';
import {ReactLoadingSpinnerBubbles} from '../../elements';
import './_review.scss';
import {ReactRatingStars} from '../../elements';
import moment from 'moment';



export function Review({
    reviews
}) {
    const { isLoading} = useSelector(
        (state) => ({
            isLoading: state.carts.loading
        }),
        shallowEqual
    );

    return (
        <div className="container _review-contain">
            {
                isLoading ? 
                    <ReactLoadingSpinnerBubbles />
                :
                reviews ?
                    reviews.map( (review, index) => {
                        return(
                                <Card key={review._id} className="my-4 mx-auto review-card">
                                    <div className="row justify-content-between py-3 _review-header-div px-5">
                                        <div className="column justify-content-center">
                                            <div className="text-muted text-capitalize">{review.reviewer.username}</div>
                                            <div className=" font-italic text-danger">{review.reviewer.email}</div>
                                        </div>
                                        <div className="column justify-content-center">
                                            <div>Ratings: 
                                            <span>
                                                <ReactRatingStars
                                                    count={review.rating}
                                                    value={review.rating}
                                                    edit={false}
                                                />
                                            </span></div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <Card.Body>
                                        <Card.Title className="text-left font-weight-bold">
                                            {review.title}
                                        </Card.Title>
                                        <Card.Title className="text-left">
                                            {review.comment}
                                        </Card.Title>
                                    </Card.Body>
                                    <Card.Footer>
                                        Reviewed at: <span className="ml-3 text-muted">{moment(review.updatedAt, "YYYYY-MM-DDT00:00:00.000Z").format('DD-MM-YYYY')}</span>
                                    </Card.Footer>
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
}



