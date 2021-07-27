import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
const ReviewDelete = (props) => {
    console.log(props)
    const [editMovie, setEditMovie] = useState(props.review.movie);
    const [editDate, setEditDate] = useState(props.review.date);
    const [editFeed, setEditFeed] = useState(props.review.feedback);
    const reviewDelete = (event, review) => {
        const token = localStorage.getItem("token")
        console.log(props);
        // fetch(`${APIURL}review/delete/${props.review.id}`, {
            fetch (`http://localhost:3000/review/delete/${props.review.id}`, {
            method: 'DELETE',
            body: JSON.stringify({
                review: {
                    movie: editMovie,
                    date: editDate,
                    feedback: editFeed
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        }).then((res) => props.fetchReviews());
            toggle();
    }
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return(
        <Button color="danger" onClick={() => {reviewDelete(props.review)}}>Delete</Button>
    )
};

export default ReviewDelete;