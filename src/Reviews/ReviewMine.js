import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Table, Button} from 'reactstrap';
import ReviewUpdate from './ReviewUpdate';

const ReviewAll = (props) => {
    const [reviews, setReviews] = useState([]);
    const fetchReviews = () => {
        const token = localStorage.getItem("token")
        fetch(`http://localhost:3000/review/`, {
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
                    <td><ReviewUpdate review={review}/>
                    </td>
                </tr>
            )
        })
    }
    useEffect(() => {
        fetchReviews();
    }, [])
    return(
        <div className="viewreviews">
        <h3>Reviews</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Movie</th>
                    <th>Date</th>
                    <th>Feedback</th>
                </tr>
            </thead>
            <tbody>
            {reviewMapper()}
            {/* <Button onClick={fetchReviews()}></Button> */}
            </tbody>
        </Table>
        </div>
    )
}
export default ReviewAll;