import React, {useState, useEffect} from 'react';
import {Table} from 'reactstrap';
import APIURL from '../helpers/environment';
import ReviewDelete from './ReviewDelete';
import ReviewUpdate from './ReviewUpdate';

const ReviewMine = (props) => {
    const [reviews, setReviews] = useState([]);
    const fetchReviews = () => {
        const token = localStorage.getItem("token")
        // fetch(`${APIURL}review/mine`, {
            fetch ('http://localhost:3000/review/mine', {

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
    }
    const reviewMapper = () => {
        return reviews.map((review, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{review.id}</th> 
                    <td>{review.movie}</td>
                    <td>{review.date}</td>
                    <td>{review.feedback}</td>
                    <td><ReviewUpdate review={review} sessionToken={props.sessionToken} fetchReviews={fetchReviews} /></td>
                    <td>
                        <ReviewDelete review={review} sessionToken={props.sessionToken} fetchReviews={fetchReviews}/>
                    </td>
                    <td><ReviewDelete review={review} sessionToken={props.sessionToken} fetchReviews={fetchReviews} />
                    </td>
                </tr>
            )
        })
    }
    useEffect(() => {
        fetchReviews();
    }, [])
    return(
        <div className="viewmyreviews">
        <h3 className="reviewmineheader">List of all my reviews</h3>
        <hr/>
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Movie</th>
                    <th>Date</th>
                    <th>Feedback</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {reviews.length !== 0 ? reviewMapper() : fetchReviews()}
            </tbody>
        </Table>
        </div>
    )
}

export default ReviewMine;