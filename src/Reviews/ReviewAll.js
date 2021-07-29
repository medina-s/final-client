import React, {useState, useEffect} from 'react';
import {Table} from 'reactstrap';
import APIURL from '../helpers/environment';

const ReviewAll = (props) => {
    const [reviews, setReviews] = useState([]);
    const fetchReviews = () => {
        const token = localStorage.getItem("token") //Grabing the token, token wasn't being pass correctly
        fetch(`${APIURL}review`, {
            // fetch ('http://localhost:3000/review', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        }).then((res) => res.json()
        ).then((logData) => {
            setReviews(logData);
            console.log(logData)
            console.log(token)
            })
            .catch((error) => {
                console.log(error.message)
                })
        };
    
    const reviewMapper = () => {
        return reviews.map((review, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{review.id}</th> 
                    <td>{review.movie}</td>
                    <td>{review.date}</td>
                    <td>{review.feedback}</td>
                </tr>
            )
        })
    }
    useEffect(() => {
        fetchReviews();
    }, [])
    return(
        // Table for all reviews
        <div className="viewallreviews">
        <h3 className="reviewhead">All Reviews, Enjoy!</h3>
        <hr/>
        <Table>
            <thead>
                <tr className="reviewalltop">
                    <th>#</th>
                    <th>Movie</th>
                    <th>Date</th>
                    <th>Feedback</th>
                </tr>
            </thead>
            <tbody>
            {reviews.length !== 0 ? reviewMapper() : null}
            </tbody>
        </Table>
        </div>
    )
}

export default ReviewAll;