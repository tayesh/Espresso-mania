import React from 'react';
import './review.css'

const SingleReview = (props) => {
    return (
        <div className='single-review'>
            <img src={props?.review?.image} className='w-100 rounded' alt="" />
            <h3>{props?.review?.name}</h3>
            <p>{props?.review?.body}</p>
            <h5>Rating : <span>{props?.review?.rating}</span></h5>
        </div>
    );
};

export default SingleReview;