import React, { useEffect, useState} from 'react';
import ReviewCreate from './ReviewCreate';
import { Container, Row, Col } from 'reactstrap';

const ReviewIndex = (props) => {
    const [reviews, setReviews] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [reviewToUpdate, setReviewToUpdate] = useState({})

    const fetchReviews = () => {
        fetch('http://localhost:3000/review', {
            method: 'GET',
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then ((res) => res.json())
            .then((logData) => {
                setReviews(logData)
                console.log(logData);
        })
    }   
    
    // const editUpdateReview = (review) => {
    //     setReviewToUpdate(review);
    //     console.log(review);
    // }

    // const updateOn = () => {
    //     setUpdateActive(true);
    // }

    // const updateOff = () => {
    //     setUpdateActive(false);
    // }

    useEffect(()=> {
        fetchReviews();
    }, [])

    return (
        <Container>
            <Row>
                <Col md="3">
                    {/* <ReviewCreate fetchReviews={fetchReviews} token={props.token}/> */}
                </Col>
                {/* <Col md="9">
                    <WorkoutTable workouts={workouts} editUpdateWorkout={editUpdateWorkout} updateOn={updateOn} fetchWorkouts={fetchWorkouts} token={props.token} />
                </Col>
                {updateActive ? <WorkoutEdit workoutToUpdate={workoutToUpdate} updateOff={updateOff} token={props.token} fetchWorkouts={fetchWorkouts}/> : <></> } */}
            </Row>
        </Container>
    )
};

export default ReviewIndex;
