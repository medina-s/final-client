import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import ReviewCreate from './ReviewCreate';
import ReviewDelete from './ReviewDelete';
import ReviewMine from './ReviewMine';
import ReviewUpdate from './ReviewUpdate'

const ReviewAll = (props) => {
    const [reviews, setReviews] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [reviewToUpdate, setReviewToUpdate] = useState({});

    const fetchReviews = () => {
        fetch('http://localhost:3000/log/mine', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json()
        ).then((logData) => {
            setReviews(logData);
            })
    }

    const editUpdateReview = (review) => {
        setReviewToUpdate(review);
        console.log(review);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
        fetchReviews();
    }, [])

    return(
        <Container>
            <Row>
                <Col md="3">
                    <ReviewCreate fetchReviews={fetchReviews} token={props.token}/>
                </Col>
                <Col md="9">
                <ReviewAll reviews={reviews} editUpdateReview={editUpdateReview} updateOn={updateOn} fetchReviews={fetchReviews} token={props.token}/>
                </Col>
                {updateActive ? <ReviewUpdate reviewToUpdate={reviewToUpdate}
                updateOff={updateOff} token={props.token} fetchReviews={fetchReviews}/> : <></>}
            </Row>
        </Container>
    )
};

export default ReviewAll;