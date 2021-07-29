import React, {useState} from 'react';
import {Button} from 'reactstrap';
import APIURL from '../helpers/environment';

const ReviewDelete = (props) => {
    console.log(props)
    const [editMovie, setEditMovie] = useState(props.review.movie);
    const [editDate, setEditDate] = useState(props.review.date);
    const [editFeed, setEditFeed] = useState(props.review.feedback);
 
    const ReviewDelete = (event, review) => {
        // alert('Review Deleted');
        const token = localStorage.getItem("token") //grabbing token from local storage
        console.log(props);
        fetch(`${APIURL}review/delete/${props.review.id}`, {
            // fetch (`http://localhost:3000/review/delete/${props.review.id}`, {
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
        <Button className="deletebtn" onClick={() => {ReviewDelete(props.review)}}>Delete</Button> //Button that deletes review
    )

};

export default ReviewDelete;