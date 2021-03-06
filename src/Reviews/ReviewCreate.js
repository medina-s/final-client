import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../helpers/environment';


const ReviewCreate = (props) => {
    const [movie, setMovie] = useState('');
    const [date, setDate] = useState('');
    const [feedback, setFeedback] = useState ('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // alert('Review Created'); //Alert pop up for a successful review create
        console.log(props.sessionToken);
        fetch(`${APIURL}review/create`, {
            // fetch ('http://localhost:3000/review/create', {
            method: 'POST',
            body: JSON.stringify({review: {movie: movie, date: date, feedback: feedback}}), //what information is to be included when creating a review
            headers: new Headers({
                'Content-type': 'application/json',
                'Authorization': `Bearer ${props.sessionToken}`
            })
        }).then((res)=> res.json())
        .then((logData) => {
            console.log(logData);
            setMovie('');
            setDate('');
            setFeedback('');
        })
        .catch((error) => {
            console.log(error.message)
            })
    };

    return(
        <div className="moviereview">
        <h1>Leave your feedback</h1>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="movie"/>
                <Input name="movie" className="movieinput" placeholder="Movie" required value={movie} onChange={(e)=> setMovie(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="date"/>
                <Input name="date" className="dateinput" placeholder="Date" required value={date} onChange={(e)=> setDate(e.target.value)}>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="feedback"/>
                <textarea name="feedback" className="feedbackinput" required placeholder="Enter your review" value={feedback} onChange={(e)=> setFeedback(e.target.value)}/>
            </FormGroup>
            <Button type="submit" className="submitreviewbtn" >Click to submit</Button>
        </Form>
        </div>
    )
}

export default ReviewCreate;